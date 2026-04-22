// @ts-check
/**
 * @import { DataOutput } from './types/app';
 */

Vue.createApp({
  /**
   * @return {DataOutput}
   */
  data() {
    return {
      counter: 0,
      message: "",
    };
  },
  watch: {
    /**
     * @this {DataOutput}
     */
    counter(value) {
      console.log("Teste!");
      if (value > 37) {
        this.message = "Too much!";
        setTimeout(() => {
          this.counter = 0;
        }, 5000);
      }
      if (value < 37) {
        this.message = "Not there yet";
      }
      if (value === 37) {
        this.message = "You did it!";
        setTimeout(() => {
          this.counter = 0;
        }, 5000);
      }
    },
  },
  methods: {
    /**
     * @this {DataOutput}
     * @param {number} num
     */
    add(num) {
      this.counter = this.counter + num;
    },
  },
}).mount("#assignment");
