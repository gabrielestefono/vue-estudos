// @ts-check

/**
 * @import {DataOutput} from './types/app';
 */
Vue.createApp({
  /**
   * @returns {DataOutput}
   */
  data() {
    const age = new Date().getFullYear() - 1997;
    return {
      name: "Gabriel Estéfono",
      age,
      image: "https://http.cat/200",
      favoriteNumber: parseInt(String(Math.random() * 10)),
    };
  },
  methods: {
    /**
     * @this {DataOutput}
     */
    calculateAge() {
      return this.age + 5;
    },
  },
}).mount("#assignment");
