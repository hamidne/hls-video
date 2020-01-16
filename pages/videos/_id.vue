<template>
  <b-container>
    <link
      href="https://unpkg.com/video.js/dist/video-js.css"
      rel="stylesheet"
    />
    <script src="https://unpkg.com/video.js/dist/video.js"></script>
    <script src="https://unpkg.com/videojs-contrib-hls/dist/videojs-contrib-hls.js"></script>
    <h1 v-text="item.stream_path"></h1>
    <video
      id="my_video_1"
      class="video-js vjs-default-skin"
      controls
      preload="auto"
      width="640"
      height="268"
      data-setup="{}"
    >
      <source :src="item.stream_path" type="application/x-mpegURL" />
    </video>
    <!-- <script src="https://unpkg.com/videojs-flash/dist/videojs-flash.js"></script>
    <script src="https://unpkg.com/videojs-contrib-hls/dist/videojs-contrib-hls.js"></script> -->
    <!-- <script src="//vjs.zencdn.net/7.3.0/video.min.js"></script>
    <script src="https://unpkg.com/browse/@videojs/http-streaming@1.11.2/dist/videojs-http-streaming.min.js"></script> -->
  </b-container>
</template>

<script>
import Video from "~/models/Video";
import videojs from "videojs-contrib-hls";
export default {
  data: () => ({
    form: {}
  }),
  mounted() {
    // const player = videojs("vid1");
    // player.play();
  },
  async asyncData({ params }) {
    return { item: await Video.$find(params.id) };
  }
};
</script>

<style></style>
