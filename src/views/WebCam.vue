<template>
	<div class="column is-half has-background-warning has-text-centered">
		<video
			ref="video2"
			playsinline
			style="
            -webkit-transform: scaleX(-1);
            transform: scaleX(-1);             
            visibility: hidden;
            width: auto;
            height: auto;
            position: absolute;
          "
		></video>
		<canvas ref="output2" width="400" height="600" class="canvas" />
		<p v-if="score != null" class="is-size-3 has-text-centered">Your Score: {{ score }}</p>
	</div>
</template>

<script>
import * as posenet from '@tensorflow-models/posenet';
import { mapState } from 'vuex';

const VIDEO_WIDTH = 400;
const VIDEO_HEIGHT = 600;
export default {
	name: 'webcam',
	computed: {
		...mapState(['sessionId']),
	},
	data: function() {
		return {
			video2: null,
			canvas2: null,
			ctx2: null,
			minConfidence: 0.2,
			videoPlaying: false,
			webcam: null,
			message: 'Ready?! Press play!',
			net2: null,
			webcamKeypoints: [],
			score: null,
			tally: 0,
			tally2: 0,
			modelLoaded: false,
		};
	},

	async mounted() {
		//handle webcam video
		this.video2 = this.$refs.video2;

		this.setUpCanvases();

		this.loadModel();

		//handle webcam
		try {
			this.webcam = await this.setupCamera();
		} catch (e) {
			this.message = e.message;
			throw e;
		}
	},

	methods: {
		setUpCanvases() {
			//set up canvases
			this.canvas2 = this.$refs.output2;

			this.ctx2 = this.canvas2.getContext('2d');
		},
		async loadModel() {
			this.net2 = await posenet.load({
				architecture: 'ResNet50',
				outputStride: 32,
				inputResolution: { width: VIDEO_WIDTH, height: VIDEO_HEIGHT },
				quantBytes: 2,
			});

			if (this.net2 != null) {
				this.modelLoaded = true;
			}
		},

		async setupCamera() {
			//step 3, set up the camera
			if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
				this.message = "Sorry, your webcam isn't available!";
			}
			const stream = await navigator.mediaDevices.getUserMedia({
				audio: false,
				video: {
					facingMode: 'user',
					flipHorizontal: true,
					width: VIDEO_WIDTH,
					height: VIDEO_HEIGHT,
				},
			});
			this.video2.srcObject = stream;
			this.video2.play();
			return new Promise((resolve) => {
				this.video2.onloadedmetadata = () => {
					resolve(this.video2);
				};
			});
		},

		async detectPoseRealTime() {
			//step 4, start showing landmarks
			//webcam
			this.canvas2.width = VIDEO_WIDTH;
			this.canvas2.height = VIDEO_HEIGHT;

			this.video2.width = VIDEO_WIDTH;
			this.video2.height = VIDEO_HEIGHT;

			await this.poseDetectionFrame(this.poseDetectionFrame);
		},

		async poseDetectionFrame() {
			console.log('detecting webcam poses');
			//right cam
			let webCamPoses = [];
			const webCamPose = await this.net2.estimatePoses(this.video2, {
				decodingMethod: 'single-person',
			});
			webCamPoses = webCamPoses.concat(webCamPose);

			//webcam
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

			if (this.videoPlaying) {
				requestAnimationFrame(this.poseDetectionFrame);
			}
		},

		drawPoint2(y, x, r) {
			this.ctx2.beginPath();
			this.ctx2.arc(x, y, r, 0, 2 * Math.PI);
			this.ctx2.fillStyle = 'blue';
			this.ctx2.fill();
		},

		toTuple({ y, x }) {
			return [y, x];
		},

		drawSegment2([ay, ax], [by, bx], color, scale) {
			this.ctx2.beginPath();
			this.ctx2.moveTo(ax * scale, ay * scale);
			this.ctx2.lineTo(bx * scale, by * scale);
			this.ctx2.lineWidth = 2;
			this.ctx2.strokeStyle = color;
			this.ctx2.stroke();
		},

		drawKeypoints2(keypoints) {
			for (let i = 0; i < keypoints.length; i++) {
				const keypoint = keypoints[i];
				const { y, x } = keypoint.position;
				this.webcamKeypoints.push(keypoint);
				this.drawPoint2(y, x, 3);
			}
		},

		async drawSkeleton2(keypoints2) {
			const adjacentKeyPoints = await posenet.getAdjacentKeyPoints(keypoints2, this.minConfidence);
			adjacentKeyPoints.forEach((keypoints2) => {
				this.drawSegment2(
					this.toTuple(keypoints2[0].position),
					this.toTuple(keypoints2[1].position),
					'blue',
					1
				);
			});
		},
	},
};
</script>
