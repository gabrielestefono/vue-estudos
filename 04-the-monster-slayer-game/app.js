// @ts-check

/**
 * @import { DataOutput, MethodsOutput, ComputedOutput, AppOutput } from "./types/app";
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
      currentRound: 0,
      winner: null,
      logMessages: [],
    };
  },
  computed: {
    /**
     * @this {AppOutput}
     */
    monsterBarStyles() {
      if (this.monsterHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.monsterHealth + "%" };
    },
    /**
     * @this {AppOutput}
     */
    playerBarStyles() {
      if (this.playerHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.playerHealth + "%" };
    },
    /**
     * @this {AppOutput}
     */
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  watch: {
    /**
     * @this {AppOutput}
     * @param {number} value
     */
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
    /**
     * @this {AppOutput}
     * @param {number} value
     */
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },
  },
  /**
   * @type {MethodsOutput}
   */
  methods: {
    /**
     * @this {AppOutput}
     */
    attackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth = this.monsterHealth - attackValue;
      this.attackPlayer();
      this.addLogMessage("player", "attack", attackValue);
    },
    /**
     * @this {AppOutput}
     */
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHealth = this.playerHealth - attackValue;
      this.addLogMessage("monster", "attack", attackValue);
    },
    /**
     * @this {AppOutput}
     */
    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(10, 25);
      this.monsterHealth = this.monsterHealth - attackValue;
      this.attackPlayer();
      this.addLogMessage("player", "attack", attackValue);
    },
    /**
     * @this {AppOutput}
     */
    healPlayer() {
      this.currentRound++;
      const healValue = getRandomValue(8, 20);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth = this.playerHealth + healValue;
      }
      this.attackPlayer();
      this.addLogMessage("player", "heal", healValue);
    },
    /**
     * @this {AppOutput}
     */
    startNewGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.winner = null;
    },
    /**
     * @this {AppOutput}
     */
    surrender() {
      this.winner = "monster";
    },
    /**
     * @this {AppOutput}
     * @param {"player" | "monster"} who
     * @param {"attack" | "heal"} what
     * @param {number} value
     */
    addLogMessage(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
}).mount("#game");
