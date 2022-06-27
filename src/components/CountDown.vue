<script>
import Bell from "../assets/bell-counter-a.mp3";

export default {
  data() {
    return {
      // Create props for second and minutes and calculate seconds
      display: {
        second: "00",
        minutes: "00",
      },
      sounds: {
        title: "Bell",
        author: `Bell, Counter, A.wav" by InspectorJ (www.jshaw.co.uk) of Freesound.org`,
      },
      isTrues: false,
      isRunning: false,
      isBreak: false,
      timerInstance: null,
      totalSeconds: 45 * 60,
      description: null,
      bell: new Audio(Bell),
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
        if (this.totalSeconds === 0 && this.isBreak === true) {
          return this.reset();
        }

        if (this.totalSeconds === 0) return this.stop(), this.changeToBreak();
        this.totalSeconds -= 1;
      }, 1000);
    },
    stop() {
      this.isRunning = false;
      clearInterval(this.timerInstance);
    },
    reset() {
      this.stop();
      this.description = "Work";
      if (this.isBreak === true && this.totalSeconds === 0) this.bell.play();
      this.isBreak = false;
      this.totalSeconds = 45 * 60;
    },
    changeToBreak() {
      this.totalSeconds = 15 * 60;
      this.description = "Take a break";
      this.isBreak = true;
      if (this.isBreak === true) this.bell.play();
    },
  },
};
</script>

<template>
  <article class="prose w-56 p-5 bg-slate-700 flex justify-center m-0">
    <h2 v-if="totalSeconds <= 900 && this.isBreak === true">
      {{ description }}
    </h2>
    <h2 v-else-if="this.isBreak === false">Play</h2>
    <h2 v-else>Something went wrong</h2>
  </article>
  <div class="bg-slate-800 p-3 m-0">
    <span class="font-mono text-6xl p-6">
      <div
        class="tooltip"
        data-tip="Play for this long and that take a break 15 minute break"
      >
        <span class="m-5"> {{ displayMinutes }}:{{ displaySeconds }}</span>
      </div>
    </span>
    <div class="flex flex-row">
      <button class="btn btn-primary m-2" @click="start">Start</button>
      <button class="btn btn-secondary m-2" @click="stop">Stop</button>
      <button class="btn m-2" @click="reset" :disabled="isRunning">
        Reset
      </button>
    </div>
  </div>
</template>

<style></style>
