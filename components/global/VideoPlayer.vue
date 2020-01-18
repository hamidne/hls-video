<template>
  <div>
    <video ref="videoPlayer" class="video-js"></video>
  </div>
</template>

<script>
import videojs from "video.js";

export default {
  name: "VideoPlayer",
  props: {
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      player: null
    };
  },
  mounted() {
    const player = videojs(
      this.$refs.videoPlayer,
      this.options,
      function onPlayerReady() {
        console.log("onPlayerReady", this);
      }
    );
    player.on("loadstart", function(e) {
      player.tech().hls.xhr.beforeRequest = function(options) {
        console.log(options);

        // required for detecting only the key requests
        // if (!options.uri.startsWith(keyPrefix)) { return; }
        // options.headers = options.headers || {};
        // optopns.headers["Custom-Header"] = "value";
        // options.uri = urlTpl.replace("{key}", options.uri.substring(keyPrefix.length));
      };
    });
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }
};
</script>

<style src="video.js/dist/video-js.css"></style>
