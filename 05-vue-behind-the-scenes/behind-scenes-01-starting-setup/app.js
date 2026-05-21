// @ts-check
/**
 * @import { DataOutput } from './types/app';
 */

const app = Vue.createApp({
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
  beforeCreate() {
    debugger;
    console.log("beforeCreate()");
  },
  created() {
    debugger;
    console.log("created()");
  },
  beforeMount() {
    debugger;
    console.log("beforeMount()");
  },
  mounted() {
    debugger;
    console.log("mounted()");
  },
  beforeUpdate() {
    debugger;
    console.log("beforeUpdate()");
  },
  updated() {
    debugger;
    console.log("updated()");
  },
  beforeUnmount() {
    debugger;
    console.log("beforeUnmount()");
  },
  unmounted() {
    debugger;
    console.log("unmounted()");
  }
});

app.mount("#app");

setTimeout(() => {
  app.unmount();
}, 3000);


Vue.createApp({
  data() {
    return {
      favoriteMeal: "Pizza",
    };
  },
}).mount("#app2");
