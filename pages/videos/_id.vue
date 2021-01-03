<template>
  <b-container>
    <h1 v-text="item.stream_path"></h1>
    <video
			:key="item.id"
			ref="video"
			class="video-js w-full h-full flex-grow"
		/>
  </b-container>
</template>

<script>
import Video from "~/models/Video";
import videojs from 'video.js'
import 'videojs-contrib-hls'
import 'video.js/dist/video-js.css'
import 'videojs-hls-quality-selector'
import 'videojs-contrib-quality-levels'

export default {
  mounted() {
    this.initVideo()
  },
  computed: {
		options() {
			return {
				autoplay: false,
				controls: true,
				sources: [
					{
						src: this.item.stream_path,
						type: 'application/x-mpegURL',
					},
				],
			}
		},
  },
  methods: {
		initVideo() {
      this.player = videojs(this.$refs.video, this.options)
      this.player.hlsQualitySelector()
		},
	},
  async asyncData({ params }) {
    return { item: await Video.$find(params.id) };
  }
};
</script>

<style></style>
