<template>
  <audio ref="alarmAudio" id="audioElement">
    <source src="@/assets/clock-alarm.mp3" type="audio/mpeg" />
  </audio>
</template>

<script>
export default {
  methods: {
    playAudio() {
      this.$refs.alarmAudio.play();
    },
  },
};
</script>
