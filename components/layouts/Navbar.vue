<template>
  <b-navbar toggleable="lg" class="bg-transparent my-3">
    <b-container>
      <nuxt-link :to="{ name: 'home' }">
        <i class="fad fa-home-alt fa-2x"></i>
      </nuxt-link>

      <h4 v-text="title" />

      <a @click="$router.go(-1)">
        <i class="fad fa-arrow-circle-left fa-2x"></i>
      </a>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false
    }
  }
};
</script>
