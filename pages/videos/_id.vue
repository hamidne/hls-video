<template>
  <b-container> </b-container>
</template>

<script>
import Video from "~/models/Video";
export default {
  data: () => ({
    form: {}
  }),
  async asyncData({ params }) {
    return { item: Video.$find(params.id) };
  }
};
</script>

<style></style>
