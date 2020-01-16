<template>
  <b-container>
    <b-row>
      <b-col md="4" v-for="item in items" :key="item.id">
        <nuxt-link
          :to="{ name: 'videos-id', params: { id: item.id } }"
          v-text="item.title"
        ></nuxt-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Video from "~/models/Video";
export default {
  async asyncData() {
    return { items: await Video.$get() };
  }
};
</script>

<style></style>
