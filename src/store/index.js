import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    break: 5,
    session: 25,
    minute: 0,
    state: "Session",
    time: 0,
    timerInterval: null,
    isPlaying: false, // Add a flag to track playing state
  }),
  getters: {},
  actions: {
    increaseBreakTime() {
      if (this.break <= 59) this.break += 1;
    },
    decreaseBreakTime() {
      if (this.break > 1) this.break -= 1;
    },
    increaseSessionTime() {
      if (this.session <= 59) this.session += 1;
    },
    decreaseSessionTime() {
      if (this.session > 1) this.session -= 1;
    },
    reset() {
      this.break = 5;
      this.session = 25;
      this.state = "Session";
      clearInterval(this.timerInterval);
      this.updateDisplay();
      this.isPlaying = false; // Reset playing state
    },
    addZero(num) {
      return num < 10 ? "0" + num : num;
    },
    playBtn() {
      const displayTime = document.getElementById("time-left");
      const audioElement = document.getElementById("audioElement");

      if (!this.isPlaying) { // Check if timer is not playing
        this.isPlaying = true; // Set playing state to true

        if (!this.timerInterval) { // Check if interval is not already set
          this.time = (this.state === "Session" ? this.session : this.break) * 60;

          const updateTime = () => {
            let min = Math.floor(this.time / 60);
            let sec = this.time % 60;
            displayTime.textContent = `${this.addZero(min)}:${this.addZero(sec)}`;
            this.time--;

            if (this.time < 0) {
              audioElement.play();
              this.toggleState();
            }
          };

          this.timerInterval = setInterval(updateTime, 1000);
          updateTime();
        } else{
          const updateTime = () => {
            let min = Math.floor(this.time / 60);
            let sec = this.time % 60;
            displayTime.textContent = `${this.addZero(min)}:${this.addZero(sec)}`;
            this.time--;

            if (this.time < 0) {
              audioElement.play();
              this.toggleState();
            }
          };
          this.timerInterval = setInterval(updateTime, 1000);
        }
      } else {
        clearInterval(this.timerInterval); // Pause the timer
        this.isPlaying = false; // Set playing state to false
      }
    },
    toggleState() {
      if (this.state === "Session") {
        this.state = "Break";
        this.time = this.break * 60;
      } else {
        this.state = "Session";
        this.time = this.session * 60;
      }
    },
    updateDisplay() {
      const displayTime = document.getElementById("time-left");
      displayTime.textContent = `${this.addZero(this.session)}:${this.addZero(0)}`;
    },
  },
});
