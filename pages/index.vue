<template>
  <div id="wrapper" class="mx-auto shadow-sm rounded pb-1 mb-3">
    <auth-video :value="current" />
    <div id="buttons" class="d-flex text-center">
      <strong
        class="flex-fill py-3"
        :class="{ active: current === 1 }"
        @click="current = 1"
        >ورود</strong
      >
      <strong
        class="flex-fill py-3"
        :class="{ active: current === 2 }"
        @click="current = 2"
        >عضویت</strong
      >
      <nuxt-link :to="{ name: 'home' }" tag="strong" class="flex-fill py-3"
        >مهمان</nuxt-link
      >
    </div>
    <b-container class="mb-3 mt-3">
      <div v-if="current === 1">
        <login-form />
      </div>
      <div v-if="current === 2">
        <register-form />
      </div>
    </b-container>
  </div>
</template>

<script>
import AuthVideo from "~/components/pages/auth/AuthVideo";
import LoginForm from "~/components/pages/auth/LoginForm";
import RegisterForm from "~/components/pages/auth/RegisterForm";
export default {
  data: () => ({
    current: 2
  }),
  components: { AuthVideo, LoginForm, RegisterForm }
};
</script>
<style lang="scss" scoped>
#buttons {
  color: #00e4ff;
  position: relative;
  border-bottom: 2px solid;
  strong {
    cursor: pointer;
  }
  .active {
    color: #fff;
    background: #00e4ff;
  }
  strong + strong {
    border-right: 2px solid;
  }
}
#wrapper {
  max-width: 600px;
}
</style>
