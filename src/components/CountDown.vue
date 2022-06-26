<script>
export default {
  data() {
    return {
      // Create props for second and minutes and calculate seconds
      display: {
        second: "00",
        minutes: "00",
      },
      isTrues: false,
      isRunning: false,
      timerInstance: null,
      totalSeconds: 45 * 60,
      timerType: 0,
    };
  },
  computed: {
    displayMinutes() {
      const minutes = Math.floor(this.totalSeconds / 60);
      return this.formatTime(minutes);
    },
    displaySeconds() {
      let seconds = this.totalSeconds % 60;
      return this.formatTime(seconds);
    },
  },
  methods: {
    formatTime(time) {
      if (time < 10) return "0" + time;
      return time.toString();
    },
    start() {
      this.stop();
      this.isRunning = true;
      this.timerInstance = setInterval(() => {
        this.totalSeconds -= 1;
      }, 1000);
    },
    stop() {
      this.isRunning = false;
      clearInterval(this.timerInstance);
    },
    reset() {
      this.stop();
      this.totalSeconds = 45 * 60;
    },
  },
};
</script>

<template>
  <span class="font-mono text-6xl p-6">
    <div
      class="tooltip"
      data-tip="Play for this long and that take a break for as long as you need to"
    >
      <span class="m-5"> {{ displayMinutes }}:{{ displaySeconds }}</span>
    </div>
  </span>
  <div class="flex flex-row">
    <button class="btn btn-primary m-2" @click="start">Start</button>
    <button class="btn btn-secondary m-2" @click="stop">Stop</button>
    <button class="btn m-2" @click="reset" :disabled="isRunning">Reset</button>
  </div>
</template>

<style></style>
