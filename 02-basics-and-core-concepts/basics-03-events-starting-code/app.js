// @ts-check
/**
 * @import {DataOutput} from './types/app';
 */

const app = Vue.createApp({
  /**
   *
   * @returns {DataOutput}
   */
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    /**
     * @this {DataOutput}
     */
    increase() {
      this.counter = this.counter + 1;
    },
    /**
     * @this {DataOutput}
     */
    decrease() {
      this.counter === 0 ? 0 : (this.counter = this.counter - 1);
    },
  },
});

app.mount("#events");
