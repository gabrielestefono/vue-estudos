// @ts-check
/**
 * @import {DataReturn} from './types/app';
 */

const app = Vue.createApp({
  /**
   * @returns {DataReturn}
   */
  data() {
    return {
      courseGoalA: "Finish the course and learn Vue!",
      courseGoalB: "<h2>Master Vue and Build amazing apps!</h2>",
      vueLink: "https://vuejs.org",
    };
  },
  methods: {
    /**
     * @this {DataReturn}
     * @returns {string}
     */
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
