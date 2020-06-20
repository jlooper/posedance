<template>
  <div class="page">
    <div class="columns">
      <div class="column is-full turquoise">
        <progress v-show="!ready" class="progress is-large is-link" max="100">60%</progress>
        <p v-show="ready" class="has-text-centered is-size-4">{{ message }}</p>
        <p v-show="ready" v-if="!sessionId" class="has-text-centered is-size-4">{{ message2 }}</p>
      </div>
    </div>

    <div class="columns">
      <div class="column is-half has-background-primary has-text-centered">
        <div class="dance">
          <canvas ref="output" width="400" height="600" class="canvas" />

          <video
            class="video"
            ref="video"
            playsinline
            style="
              -webkit-transform: scaleX(-1);
              transform: scaleX(-1);
              visibility: hidden;
              width: auto;
              height: auto;
              display:none;
              "
            controls
          >
            <source :src="'/videos/' + id + '.mp4'" type="video/mp4" />
          </video>
          <img :src="'/images/' + id + '.png'" style="display:none;" ref="placeholder" />
        </div>
      </div>
      <div class="column is-half has-background-warning has-text-centered">
        <video
          ref="video2"
          playsinline
          style="
            visibility: hidden;
            width: auto;
            height: auto;
            position: absolute;
          "
        ></video>
        <canvas ref="output2" width="400" height="600" class="canvas" />
        <p v-if="score != null" class="is-size-3 has-text-centered">Your Score: {{ score }}</p>
      </div>
    </div>
    <div class="columns">
      <div class="column p-10 is-half has-text-right">
        <button :enabled="!ready" class="button is-large is-info" @click="previewVideo()">Preview</button>
      </div>
      <div class="column p-10 is-half has-text-left">
        <button :enabled="!ready" class="button is-large is-success" @click="play()">play!</button>
      </div>
    </div>
  </div>
</template>

<script>
import * as posenet from "@tensorflow-models/posenet";
import { mapState } from "vuex";
import axios from "axios";

const VIDEO_WIDTH = 400;
const VIDEO_HEIGHT = 600;
export default {
  name: "Dance",
  computed: {
    ready() {
      if (!this.videoLoaded && !this.modelLoaded) {
        return false;
      } else {
        return true;
      }
    },
    ...mapState(["sessionId"])
  },
  data: function() {
    return {
      video: null,
      video2: null,
      canvas: null,
      canvas2: null,
      ctx: null,
      ctx2: null,
      minConfidence: 0.2,
      net: null,
      modelLoaded: false,
      videoLoaded: false,
      id: null,
      videoPlaying: false,
      webcam: null,
      message: "Ready?! Press preview for poses, and play for webcam!",
      message2: "Login to save scores!",
      net2: null,
      webcamKeypoints: [],
      videoKeypoints: [],
      score: null,
      tally: 0,
      tally2: 0,
      preview: false
    };
  },
  created() {
    this.id = this.$route.params.id;
  },
  async mounted() {
    //step 1, start up the model and load video
    this.video = this.$refs.video;
    //video properties
    this.video.onended = event => {
      console.log(event);
      this.videoPlaying = false;
      cancelAnimationFrame(this.poseDetectionFrame);
      if (!this.preview) {
        this.calculateScore();
      }
    };
    this.video.onplaying = event => {
      console.log(event);
      this.videoPlaying = true;
      this.detectPoseRealTime();
    };
    //handle webcam video
    this.video2 = this.$refs.video2;
    this.setUpCanvases();
    this.loadModels();
    //handle webcam
    try {
      this.webcam = await this.setupCamera();
    } catch (e) {
      this.message = e.message;
      throw e;
    }
  },
  methods: {
    calculateScore() {
      this.score = 0;
      console.log("calculating score");
      let webCamx = [];
      let videox = [];
      let webCamy = [];
      let videoy = [];
      for (let i = 0; i < this.webcamKeypoints.length; i++) {
        webCamx.push(this.webcamKeypoints[i].position.x);
        webCamy.push(this.webcamKeypoints[i].position.y);
      }
      for (let i = 0; i < this.videoKeypoints.length; i++) {
        videox.push(this.videoKeypoints[i].position.x);
        videoy.push(this.videoKeypoints[i].position.y);
      }
      let xs = videox.map(function(a, i) {
        return a === webCamx[i] ? a : a - webCamx[i];
      });
      let ys = videoy.map(function(a, i) {
        return a === webCamy[i] ? a : a - webCamy[i];
      });
      //console.log(xs, ys);
      var sum = 0;
      var sum2 = 0;
      for (var i in xs) {
        if (!isNaN(i)) {
          sum += xs[i];
        }
      }
      for (var j in ys) {
        if (!isNaN(i)) {
          sum2 += ys[j];
        }
      }
      let s = sum / xs.length + sum2 / ys.length;
      this.score = (Math.min(1000 / -s, 1000)).toFixed(2);
      if (!isNaN(this.score)) {
        this.postScore(this.score);
      } else {
        this.score = "Sorry, we couldn't calculate a score";
      }
    },
    postScore(score) {
      if (this.sessionId != null) {
        axios
          .post("/api/score", {
            sessionId: this.sessionId,
            score: parseInt(score)
          })
          .then(response => {
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
            this.message =
              "Please login to see your scores on the leaderboard!";
          });
      }
    },

    setUpCanvases() {
      this.canvas = this.$refs.output;
      this.canvas2 = this.$refs.output2;
      this.ctx = this.canvas.getContext("2d");
      this.ctx2 = this.canvas2.getContext("2d");
      //placeholder so there's no blank square
      let placeholder = this.$refs.placeholder;
      placeholder.width = VIDEO_WIDTH;
      placeholder.height = VIDEO_HEIGHT;
      this.ctx.drawImage(placeholder, 0, 0);
    },
    async loadModels() {
      this.net = await posenet.load({
        architecture: "ResNet50",
        outputStride: 32,
        inputResolution: { width: VIDEO_WIDTH, height: VIDEO_HEIGHT },
        quantBytes: 2
      });
      this.net2 = await posenet.load({
        architecture: "ResNet50",
        outputStride: 32,
        inputResolution: { width: VIDEO_WIDTH, height: VIDEO_HEIGHT },
        quantBytes: 2
      });
      if (this.net != null && this.net2 != null) {
        this.modelLoaded = true;
      }
    },
    async setupCamera() {
      //step 3, set up the camera
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: false,
          video: {
            facingMode: "user",
            flipHorizontal: true,
            width: VIDEO_WIDTH,
            height: VIDEO_HEIGHT
          }
        });
        this.video2.srcObject = stream;
        this.video2.play();
        return new Promise(resolve => {
          this.video2.onloadedmetadata = () => {
            resolve(this.video2);
          };
        });
      } else {
        this.message = "Sorry, your webcam isn't available!";
      }
    },
    play() {
      this.video.play();
    },
    previewVideo() {
      this.preview = true;
      this.video.play();
    },
    loadVideo() {
      this.videoLoaded = true;
    },
    async detectPoseRealTime() {
      //step 4, start showing landmarks
      //left cam
      this.canvas.width = VIDEO_WIDTH;
      this.canvas.height = VIDEO_HEIGHT;
      this.video.width = VIDEO_WIDTH;
      this.video.height = VIDEO_HEIGHT;
      //webcam
      if (!this.preview) {
        this.canvas2.width = VIDEO_WIDTH;
        this.canvas2.height = VIDEO_HEIGHT;
        this.video2.width = VIDEO_WIDTH;
        this.video2.height = VIDEO_HEIGHT;
      }
      await this.poseDetectionFrame(this.poseDetectionFrame);
    },
    async poseDetectionFrame() {
      console.log("detecting");
      //left cam
      let poses = [];
      const pose = await this.net.estimatePoses(this.video, {
        decodingMethod: "single-person"
      });
      poses = poses.concat(pose);

      //left video
      this.ctx.clearRect(0, 0, VIDEO_WIDTH, VIDEO_HEIGHT);
      this.ctx.save();
      this.ctx.drawImage(this.video, 0, 0, VIDEO_WIDTH, VIDEO_HEIGHT);
      this.ctx.restore();

      poses.forEach(({ score, keypoints }) => {
        if (score >= this.minConfidence) {
          this.drawKeypoints(keypoints);
          this.drawSkeleton(keypoints);
        }
      });

      //webcam
      if (!this.preview) {
        let webCamPoses = [];
        const webCamPose = await this.net2.estimatePoses(this.video2, {
          decodingMethod: "single-person"
        });
        webCamPoses = webCamPoses.concat(webCamPose);
        this.ctx2.clearRect(0, 0, VIDEO_WIDTH, VIDEO_HEIGHT);
        this.ctx2.save();
        this.ctx2.drawImage(this.video2, 0, 0, VIDEO_WIDTH, VIDEO_HEIGHT);
        this.ctx2.restore();

        webCamPoses.forEach(({ score, keypoints }) => {
          if (score >= this.minConfidence) {
            this.drawKeypoints2(keypoints);
            this.drawSkeleton2(keypoints);
          }
        });
      }
      if (this.videoPlaying) {
        requestAnimationFrame(this.poseDetectionFrame);
      }
    },
    drawPoint(y, x, r) {
      this.ctx.beginPath();
      this.ctx.arc(x, y, r, 0, 2 * Math.PI);
      this.ctx.fillStyle = "#FF0000";
      this.ctx.fill();
    },
    drawPoint2(y, x, r) {
      this.ctx2.beginPath();
      this.ctx2.arc(x, y, r, 0, 2 * Math.PI);
      this.ctx2.fillStyle = "#FFFFFF";
      this.ctx2.fill();
    },
    toTuple({ y, x }) {
      return [y, x];
    },
    drawSegment([ay, ax], [by, bx], color, scale) {
      this.ctx.beginPath();
      this.ctx.moveTo(ax * scale, ay * scale);
      this.ctx.lineTo(bx * scale, by * scale);
      this.ctx.lineWidth = 2;
      this.ctx.strokeStyle = color;
      this.ctx.stroke();
    },
    drawSegment2([ay, ax], [by, bx], color, scale) {
      this.ctx2.beginPath();
      this.ctx2.moveTo(ax * scale, ay * scale);
      this.ctx2.lineTo(bx * scale, by * scale);
      this.ctx2.lineWidth = 2;
      this.ctx2.strokeStyle = color;
      this.ctx2.stroke();
    },
    drawKeypoints(keypoints) {
      for (let i = 0; i < keypoints.length; i++) {
        const keypoint = keypoints[i];
        const { y, x } = keypoint.position;
        this.videoKeypoints.push(keypoint);
        this.drawPoint(y, x, 3);
      }
    },
    drawKeypoints2(keypoints) {
      for (let i = 0; i < keypoints.length; i++) {
        const keypoint = keypoints[i];
        const { y, x } = keypoint.position;
        this.webcamKeypoints.push(keypoint);
        this.drawPoint2(y, x, 3);
      }
    },
    async drawSkeleton(keypoints) {
      const adjacentKeyPoints = await posenet.getAdjacentKeyPoints(
        keypoints,
        this.minConfidence
      );
      adjacentKeyPoints.forEach(keypoints => {
        this.drawSegment(
          this.toTuple(keypoints[0].position),
          this.toTuple(keypoints[1].position),
          "#FF0000",
          1
        );
      });
    },
    async drawSkeleton2(keypoints2) {
      const adjacentKeyPoints = await posenet.getAdjacentKeyPoints(
        keypoints2,
        this.minConfidence
      );
      adjacentKeyPoints.forEach(keypoints2 => {
        this.drawSegment2(
          this.toTuple(keypoints2[0].position),
          this.toTuple(keypoints2[1].position),
          "#FFFFFF",
          1
        );
      });
    }
  }
};
</script>

<style scoped>
.canvas,
.video {
  z-index: 10;
  border: 5px solid black;
  border-radius: 2px;
  margin: 50px;
  box-shadow: -8px 8px 0px #ad8dcd;
}
.turquoise {
  background-color: #7dbfcb;
  margin-top: 10px;
}
.page {
  margin-bottom: 60px;
}
</style>
