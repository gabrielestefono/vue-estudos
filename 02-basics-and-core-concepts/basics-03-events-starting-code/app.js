// @ts-check

/**
 * @this {{ counter: number }}
 */
function increase() {
  this.counter++;
}

/**
 * @this {{ counter: number }}
 */
function decrease() {
  if (this.counter > 0) {
    this.counter--;
  }
}

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increase,
    decrease,
  },
});

app.mount("#events");
