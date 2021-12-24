import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menuItems: [
      { text: "Home", icon: "home", to: "/home" },
      { text: "My Tasks", icon: "check-circle", to: "/tasks" },
      { text: "Inbox", icon: "bell", to: "/inbox" },
      { text: "Reporting", icon: "reporting", to: "/reporting" },
      { text: "Portfolios", icon: "file", to: "/portfolios" },
      { text: "Goals", icon: "goals", to: "/goals" },
    ],
    navigationDrawer: false,
    userBackgroundColor: undefined,
  },
  getters: {
    menuItems(state) {
      return state.menuItems;
    },
  },
  mutations: {
    drawer(state) {
      state.navigationDrawer = !state.navigationDrawer;
    },
    userColor(state, userColor) {
      return (state.userBackgroundColor = userColor);
    },
  },
  actions: {},
  modules: {},
});
