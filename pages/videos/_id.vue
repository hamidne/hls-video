<template>
  <b-container>
    <h1 v-text="item.stream_path"></h1>
    <video-player :options="videoOptions" />
  </b-container>
</template>

<script>
import Video from "~/models/Video";
import VideoPlayer from "~/components/global/VideoPlayer";
export default {
  components: { VideoPlayer },
  async asyncData({ params }) {
    const item = await Video.$find(params.id);
    return {
      item,
      videoOptions: {
        autoplay: true,
        controls: true,
        sources: [
          {
            src: item.stream_path
          }
        ]
      }
    };
  }
};
</script>

<style></style>
