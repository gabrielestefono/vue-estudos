// @ts-check
/**
 * @import { DataOutput } from './types/app';
 */

Vue.createApp({
  /**
   * @returns {DataOutput}
   */
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  computed: {
    boxAClasses() {
      return { active: this.boxASelected };
    },
    boxBClasses() {
      return { active: this.boxBSelected };
    },
    boxCClasses() {
      return { active: this.boxCSelected };
    },
  },
  methods: {
    /**
     *
     * @param {'A'|'B'|'C'} box
     */
    boxSelected(box) {
      if (box === "A") {
        this.boxASelected = !this.boxASelected;
        return;
      }

      if (box === "B") {
        this.boxBSelected = !this.boxBSelected;
        return;
      }

      this.boxCSelected = !this.boxCSelected;
    },
  },
}).mount("#styling");
