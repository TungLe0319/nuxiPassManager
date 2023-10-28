import { defineStore } from "pinia";

export const useSnackBarStore = defineStore("SnackBar", {
  state: () => ({
    content: "",
    color: "",
    visible: false,
  }),
  actions: {
    showSnackBar(payload: any) {
      this.visible = true; // Show the snackbar immediately

      // Set a timeout to hide the snackbar after 2 seconds
      setTimeout(() => {
        this.visible = false;
      }, 2000); // 2000 milliseconds = 2 seconds
    },
  },
});
