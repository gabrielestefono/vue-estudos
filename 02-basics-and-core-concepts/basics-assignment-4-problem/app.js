// @ts-check
/**
 * @import {DataOutput} from './types/app';
 */

Vue.createApp({
  /**
   * @return {DataOutput}
   */
  data() {
    return {
      classInputed: "",
      isParagraphVisible: true,
      inlineStyle: "",
    };
  },
  computed: {
    /**
     * @this {DataOutput}
     */
    showInput() {
      if (this.isParagraphVisible) {
        return "visible";
      }
      return "hidden";
    },
  },
  methods: {
    /**
     * @this {DataOutput}
     */
    toggleInput() {
      this.isParagraphVisible = !this.isParagraphVisible;
    },
  },
}).mount("#assignment");
