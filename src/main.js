import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/tailwind.css";

Vue.mixin({
  methods: {
    randomColor: function () {
      return "#" + Math.floor(Math.random() * 16777215).toString(16);
    },
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
