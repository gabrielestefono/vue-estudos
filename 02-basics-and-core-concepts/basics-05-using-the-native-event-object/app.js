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
     * @param {Event} event
     * @param {string} lastName
     */
    setName(event, lastName) {
      const target = event.target;
      if (!(target instanceof HTMLInputElement)) {
        return;
      }
      this.name = target.value;
    },
    /**
     * @this {DataOutput}
     * @param {number} num
     */
    add(num) {
      this.counter = this.counter + num;
    },
    /**
     * @this {DataOutput}
     * @param {number} num
     */
    reduce(num) {
      this.counter = this.counter - num;
    },
    /**
     */
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
