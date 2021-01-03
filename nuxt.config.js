import css from "./config/css";
import head from "./config/head";
import axios from "./config/axios";
import proxy from "./config/proxy";
import modules from "./config/modules";
import plugins from "./config/plugins";
import bootstrapVue from "./config/bootstrapVue";

export default {
  ssr: false,

  css,
  head,
  proxy,
  axios,
  modules,
  plugins,
  bootstrapVue,

  loading: { color: "#fff" },

  buildModules: [],

  build: {
    extend(config, ctx) {}
  }
};
