// @ts-check

/**
 * @import { DataOutput } from "./types/app";
 */

Vue.createApp({
  /**
   * @returns {DataOutput}
   */
  data() {
    return {
      task: "",
      tasks: [],
      isVisible: true,
    };
  },
  methods: {
    /**
     * @this {DataOutput}
     */
    addTask() {
      this.tasks.push(this.task);
    },
    /**
     * @this {DataOutput}
     */
    toggleShowTasks() {
      this.isVisible = !this.isVisible;
    },
  },
}).mount("#assignment");
