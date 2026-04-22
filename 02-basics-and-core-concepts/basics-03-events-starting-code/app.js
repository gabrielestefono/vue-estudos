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
      counter: 0,
      name: "",
      confirmedName: "",
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
    /**
     * @this {DataOutput}
     */
    submitForm() {
      alert("Formulário enviado!");
    },
    /**
     * @this {DataOutput}
     */
    confirmInput() {
      this.confirmedName = this.name;
    },
  },
});

app.mount("#events");
