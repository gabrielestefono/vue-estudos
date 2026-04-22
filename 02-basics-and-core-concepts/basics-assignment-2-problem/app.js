// @ts-check
/**
 * @import { DataOutput } from './types/app';
 */

Vue.createApp({
  /** @return {DataOutput} */
  data() {
    return {
      typedValue: "",
      enteredValue: "",
      showValue: "",
    };
  },
  methods: {
    showAlert() {
      alert("O botão foi clicado!");
    },
    /**
     * @this {DataOutput}
     * @param {Event} e
     */
    changeInputValue(e) {
      const target = e.target;
      if (!(target instanceof HTMLInputElement)) {
        return;
      }
      this.typedValue = target.value;
    },
    /**
     * @this {DataOutput}
     * @param {Event} e
     */
    changeInputValueEnter(e) {
      const target = e.target;
      if (!(target instanceof HTMLInputElement)) {
        return;
      }
      this.enteredValue = target.value;
    },
    /**
     * @this {DataOutput}
     */
    changeInputWithEnter() {
      this.showValue = this.enteredValue;
    },
  },
}).mount("#assignment");
