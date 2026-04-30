// @ts-check
/**
 * @import { DataOutput } from './types/app';
 */

Vue.createApp({
  /**
   *
   * @returns {DataOutput}
   */
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    /**
     * @param {Event} event
     */
    saveInput(event) {
      const target = event.target;
      if (!(target instanceof HTMLInputElement)) {
        return;
      }
      this.currentUserInput = target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
    },
  },
}).mount("#app");

Vue.createApp({
  data() {
    return {
      favoriteMeal: "Pizza",
    };
  },
}).mount("#app2");
