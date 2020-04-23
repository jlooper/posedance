<template>
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
</template>
<script>
import * as posenet from '@tensorflow-models/posenet';
import { mapState } from 'vuex';

const VIDEO_WIDTH = 400;
const VIDEO_HEIGHT = 600;
export default {
	name: 'TikTokDancer',
	computed: {
		...mapState(['sessionId']),
	},
	data: function() {
		return {
			video: null,
			canvas: null,
			ctx: null,
			minConfidence: 0.2,
			net: null,
			//modelLoaded: false,
			//videoLoaded: false,
			id: null,
			videoPlaying: false,
			videoKeypoints: [],
		};
	},
	created() {
		this.id = this.$route.params.id;
	},
	async mounted() {
		//step 1, start up the model and load video
		this.video = this.$refs.video;

		//video properties
		this.video.onended = (event) => {
			console.log(event);
			this.videoPlaying = false;

			cancelAnimationFrame(this.poseDetectionFrame);

			this.calculateScore();
		};

		this.video.onplaying = (event) => {
			console.log(event);
			this.videoPlaying = true;
			this.detectPoseRealTime();
		};

		this.setUpVideoCanvas();

		this.loadModel();
	},

	methods: {
		setUpVideoCanvas() {
			//set up canvases
			this.canvas = this.$refs.output;

			this.ctx = this.canvas.getContext('2d');

			//placeholder so there's no blank square
			let placeholder = this.$refs.placeholder;
			placeholder.width = VIDEO_WIDTH;
			placeholder.height = VIDEO_HEIGHT;
			this.ctx.drawImage(placeholder, 0, 0);
		},
		async loadModel() {
			this.net = await posenet.load({
				architecture: 'ResNet50',
				outputStride: 32,
				inputResolution: { width: VIDEO_WIDTH, height: VIDEO_HEIGHT },
				quantBytes: 2,
			});

			if (this.net != null) {
				//this.modelLoaded = true;
				this.$emit('ready', true);
			}
		},

		/*loadVideo() {
			console.log('videoLoaded');
			this.videoLoaded = true;
		},*/

		play() {
			this.video.play();
		},

		async detectPoseRealTime() {
			//step 4, start showing landmarks
			//left cam
			this.canvas.width = VIDEO_WIDTH;
			this.canvas.height = VIDEO_HEIGHT;

			this.video.width = VIDEO_WIDTH;
			this.video.height = VIDEO_HEIGHT;

			await this.poseDetectionFrame(this.poseDetectionFrame);
		},

		async poseDetectionFrame() {
			console.log('detecting');

			//left cam
			let poses = [];
			const pose = await this.net.estimatePoses(this.video, {
				decodingMethod: 'single-person',
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

			if (this.videoPlaying) {
				requestAnimationFrame(this.poseDetectionFrame);
			}
		},

		drawPoint(y, x, r) {
			this.ctx.beginPath();
			this.ctx.arc(x, y, r, 0, 2 * Math.PI);
			this.ctx.fillStyle = '#FF0000';
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
				this.videoKeypoints.push(keypoint);
				this.drawPoint(y, x, 3);
			}
		},

		async drawSkeleton(keypoints) {
			const adjacentKeyPoints = await posenet.getAdjacentKeyPoints(keypoints, this.minConfidence);
			adjacentKeyPoints.forEach((keypoints) => {
				this.drawSegment(
					this.toTuple(keypoints[0].position),
					this.toTuple(keypoints[1].position),
					'#FF0000',
					1
				);
			});
		},
	},
};
</script>
