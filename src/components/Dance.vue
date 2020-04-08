<template>
  <div>
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
					position: absolute;
          display:none
				"
        controls
      >
        <source src="../assets/video.mp4" type="video/mp4" />
      </video>
    </div>

    <div>
      <button @click="play">play!</button>
    </div>
  </div>
</template>

<script>
import * as posenet from "@tensorflow-models/posenet";
const VIDEO_WIDTH = 400;
const VIDEO_HEIGHT = 600;
export default {
  name: "Dance",

  data: function() {
    return {
      video: null,
      ctx: null,
      minConfidence: 0.2,
      net: null
    };
  },

  async mounted() {
    //step 1, start up the model and load video

    this.net = await posenet.load({
      architecture: "ResNet50",
      outputStride: 32,
      inputResolution: { width: 400, height: 600 },
      quantBytes: 2
    });

    this.video = this.$refs.video;

    await this.loadVideo();
  },

  methods: {
    play() {
      this.video.play();
    },

    async loadVideo() {
      await this.detectPoseRealTime();
    },

    async detectPoseRealTime() {
      //step 4, start showing landmarks
      this.canvas = this.$refs.output;

      this.canvas.width = VIDEO_WIDTH;
      this.canvas.height = VIDEO_HEIGHT;

      this.ctx = this.canvas.getContext("2d");
      this.video.width = VIDEO_WIDTH;
      this.video.height = VIDEO_HEIGHT;
      this.poseDetectionFrame();
    },

    async poseDetectionFrame() {
      let poses = [];

      const pose = await this.net.estimatePoses(this.video, {
        //flipHorizontal: true,
        decodingMethod: "single-person"
      });
      poses = poses.concat(pose);
      this.ctx.clearRect(0, 0, VIDEO_WIDTH, VIDEO_HEIGHT);
      this.ctx.save();
      //this.ctx.scale(-1, 1);
      //this.ctx.translate(-VIDEO_WIDTH, 0);
      this.ctx.drawImage(this.video, 0, 0, VIDEO_WIDTH, VIDEO_HEIGHT);
      this.ctx.restore();

      poses.forEach(({ score, keypoints }) => {
        if (score >= this.minConfidence) {
          this.drawKeypoints(keypoints);
          this.drawSkeleton(keypoints);
        }
      });
      requestAnimationFrame(this.poseDetectionFrame);
    },

    drawPoint(y, x, r) {
      this.ctx.beginPath();
      this.ctx.arc(x, y, r, 0, 2 * Math.PI);
      this.ctx.fillStyle = "#FF0000";
      this.ctx.fill();
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
    drawKeypoints(keypoints) {
      for (let i = 0; i < keypoints.length; i++) {
        const keypoint = keypoints[i];
        const { y, x } = keypoint.position;
        this.drawPoint(y, x, 3);
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
    }
  }
};
</script>

<style scoped>
.canvas,
.video {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  border: 1px solid black;
}
button {
  position: absolute;
  top: 75%;
}
</style>
