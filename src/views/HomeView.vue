<template>
  <div class="home">
    <h1>25 + 5 Clock</h1>
    <div class="break">
      <h3 id="break-label">Break Length</h3>
      <div>
        <h3 id="break-decrement"><i class="fa-solid fa-arrow-down"></i></h3>
      </div>
      <div>
        <h3 id="break-length">{{ counterStore.break }}</h3>
      </div>
      <div>
        <h3 id="break-increment"><i class="fa-solid fa-arrow-up"></i></h3>
      </div>
    </div>
    <div class="session">
      <h3 id="session-label">Session Length</h3>
      <div>
        <h3 id="session-decrement"><i class="fa-solid fa-arrow-down"></i></h3>
      </div>
      <div>
        <h3 id="session-length">{{ counterStore.session }}</h3>
      </div>
      <div>
        <h3 id="session-increment"><i class="fa-solid fa-arrow-up"></i></h3>
      </div>

    </div>
    <div class="timer">
      <h1 id="timer-label">{{ counterStore.state }}</h1>
    </div>
  </div>
</template>
<script>
import { useCounterStore } from "@/store";
export default {
  data() {
    return {
      counterStore: useCounterStore(),
    };
  },
};
</script>
