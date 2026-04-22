// @ts-check
/**
 * @import { DataOutput } from './types/app';
 */

const app = Vue.createApp({
  /**
   * @returns {DataOutput}
   */
  data() {
    return {
      name: "",
      counter: 0,
      lastName: "",
    };
  },
  watch: {
    /**
     * @this {DataOutput}
     */
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
      if (value <= 0) {
        this.counter = 0;
      }
    },
  },
  computed: {
    /**
     * @this {DataOutput}
     */
    fullName() {
      if (this.name === "" && this.lastName === "") {
        return "";
      }
      return this.name + " " + this.lastName;
    },
  },
  methods: {
    /**
     * @this {DataOutput}
     * @param {Event} event
     */
    setName(event) {
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
