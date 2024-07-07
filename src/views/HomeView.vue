<template>
  <div class="home">
    <h1 id="main-title">25 + 5 Clock</h1>
    <div class="length-controls">
      <div class="break">
        <h3 id="break-label">Break Length</h3>
        <div class="break-controls">
          <div>
            <h3 id="break-decrement">
              <i
                class="fa-solid fa-arrow-down fa-2x"
                @click="counterStore.decreaseBreakTime"
              ></i>
            </h3>
          </div>
          <div>
            <h3 id="break-length">{{ counterStore.break }}</h3>
          </div>
          <div>
            <h3 id="break-increment" @click="counterStore.increaseBreakTime">
              <i class="fa-solid fa-arrow-up fa-2x"></i>
            </h3>
          </div>
        </div>
      </div>
      <div class="session">
        <h3 id="session-label">Session Length</h3>
        <div class="session-controls">
          <div>
            <h3 id="session-decrement">
              <i
                class="fa-solid fa-arrow-down fa-2x"
                @click="counterStore.decreaseSessionTime"
              ></i>
            </h3>
          </div>
          <div>
            <h3 id="session-length">{{ counterStore.session }}</h3>
          </div>
          <div>
            <h3 id="session-increment">
              <i
                class="fa-solid fa-arrow-up fa-2x"
                @click="counterStore.increaseSessionTime"
              ></i>
            </h3>
          </div>
        </div>
      </div>
    </div>
    <div class="timer">
      <h3 id="timer-label" :style="{ color: updateColor }">
        {{ counterStore.state }}
      </h3>
      <h1 id="time-left" :style="{ color: updateColor }">
        {{ counterStore.addZero(counterStore.session) }}:{{
          counterStore.addZero(counterStore.minute)
        }}
      </h1>
    </div>
    <div class="timer-controls">
      <div class="play-stop">
        <AudioElement />
        <i class="fa-solid fa-play fa-2x" @click="counterStore.playBtn"></i>
        <i class="fa-solid fa-pause fa-2x" @click="counterStore.playBtn"></i>
      </div>
      <i class="fa-solid fa-rotate fa-2x" @click="counterStore.reset"></i>
    </div>
    
  </div>
  <footer>
    <CoderDetail />
  </footer>
</template>

<script>
import AudioElement from "@/components/AudioElement.vue";
import CoderDetail from "@/components/CoderDetail.vue";
import { useCounterStore } from "@/store";

export default {
  data() {
    return {
      counterStore: useCounterStore(),
    };
  },
  components: {
    CoderDetail,
    AudioElement,
  },
  computed: {
    updateColor() {
      return this.counterStore.time > 0 && this.counterStore.time < 60
        ? "red"
        : "white";
    },
  },
};
</script>
