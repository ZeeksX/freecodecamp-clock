import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    break: 5,
    session: 25,
    minute: 0,
    state: "Session",
  }),
  getters: {},
  actions: {
    increaseBreakTime() {
      if(this.break<=59) this.break += 1;
    },
    decreaseBreakTime() {
      if(this.break>1) this.break -= 1;
    },
    increaseSessionTime() {
      if(this.session<=59) this.session += 1;
    },
    decreaseSessionTime() {
      if(this.session>1) this.session -= 1;
    },
    reset(){
      this.break = 5,
      this.session = 25
    }
  },
});
