import { defineStore } from "pinia";

export const state = () => ({
  content: "",
  color: "",
});

export const mutations = {
  showMessage(state, payload) {
    state.content = payload.content;
    state.color = payload.color;
  },
};

export const useSnackBarStore = defineStore({
  state: () => ({
    content: "",
    color: "",
  }),

  actions: {
    showSnackBar(payload) {},
  },
});
