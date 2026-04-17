// @ts-check
/**
 * @import { DataOutput } from './types/app';
 */

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    /**
     * @this {DataOutput}
     * @param {number} step
     */
    increase(step) {
      this.counter = this.counter + step;
    },
    /**
     * @this {DataOutput}
     * @param {number} step
     */
    decrease(step) {
      if (this.counter > 0) {
        this.counter = this.counter - step;
      }
    },
    /**
     * @this {DataOutput}
     * @param {Event} event
     * @param {string} defaultName
     */
    setName(event, defaultName) {
      const target = event.target;
      if (!(target instanceof HTMLInputElement)) {
        return;
      }
      this.name = target.value + " " + defaultName;
    },
  },
});

app.mount("#events");
