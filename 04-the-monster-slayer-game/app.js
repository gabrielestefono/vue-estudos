// @ts-check

/**
 * @import { DataOutput, MethodsOutput } from "./types/app";
 */

/**
 *
 * @param {number} min
 * @param {number} max
 * @returns
 */
function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

Vue.createApp({
  /**
   * @returns {DataOutput}
   */
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    };
  },
  /**
   * @type {MethodsOutput}
   */
  methods: {
    /**
     * @this {DataOutput & MethodsOutput}
     */
    attackMonster() {
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth = this.monsterHealth - attackValue;
      setTimeout(() => {
        this.attackPlayer();
      }, 500);
    },
    /**
     * @this {DataOutput & MethodsOutput}
     */
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHealth = this.playerHealth - attackValue;
    },
  },
}).mount("#game");
