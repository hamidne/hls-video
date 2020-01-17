<template>
  <b-container>
    <h1 v-text="item.stream_path"></h1>
    <video-player :options="videoOptions"/>
  </b-container>
</template>

<script>
import Video from "~/models/Video";
import VideoPlayer from "~/components/global/VideoPlayer";
export default {
  components: { VideoPlayer },
  data() {
    return {
      videoOptions: {
        autoplay: true,
        controls: true,
        sources: [
          {
            src: "https://d2zihajmogu5jn.cloudfront.net/sintel/master.m3u8",
          }
        ]
      }
    };
  },
  async asyncData({ params }) {
    return { item: await Video.$find(params.id) };
  }
};
</script>

<style></style>
