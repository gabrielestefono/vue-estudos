// @ts-check
/**
 * @import {DataOutput} from './types/app';
 */

const app = Vue.createApp({
  /**
   * @returns {DataOutput}
   */
  data() {
    return {
      enteredGoalValue: "",
      goals: [],
    };
  },
  methods: {
    /**
     * @this {DataOutput}
     */
    addGoal() {
      this.goals.push(this.enteredGoalValue);
    },
    /**
     * @param {number} index
     * @this {DataOutput}
     */
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
  },
});

app.mount("#user-goals");
