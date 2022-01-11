import { createStore } from "vuex";

export default createStore({
  state: {
    collapsed: false,
    width: {
      SIDEBAR_WIDTH: 180,
      SIDEBAR_WIDTH_COLLAPSED: 38,
    },
  },
  mutations: {
    toggleCollapse(state) {
      state.collapsed = !state.collapsed;
    },
  },
  getters: {
    sidebarWidth(state) {
      return `${
        state.collapsed
          ? state.width.SIDEBAR_WIDTH_COLLAPSED
          : state.width.SIDEBAR_WIDTH
      }`;
    },
    collapsedImage(state) {
      return !state.collapsed
        ? "src/assets/Signature_logo.png"
        : "src/assets/Logo_col_one.png";
    },
  },
});
