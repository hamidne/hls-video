<template>
  <b-container>
    <b-form class="mt-5" @submit.prevent="submit">
      <b-form-group label="Enter your name" label-for="input-1">
        <b-form-input id="input-1" v-model="form.title" trim />
      </b-form-group>

      <b-form-group label="Enter your name" label-for="input-1">
        <b-form-file
          v-model="form.video"
          placeholder="Choose a file or drop it here..."
          drop-placeholder="Drop file here..."
        />
      </b-form-group>

      <b-button variant="primary" type="submit">Save</b-button>
    </b-form>
  </b-container>
</template>

<script>
import Video from "~/models/Video";
export default {
  data: () => ({
    form: {}
  }),
  methods: {
    submit() {
      const form = new FormData();
      form.append("title", this.form.title);
      form.append("video", this.form.video);
      this.$axios
        .$post("/api/videos", form)
        .then(() => this.$router.push("videos"));
    }
  }
};
</script>

<style></style>
