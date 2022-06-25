<script setup>
import Timer from "./CountDown.vue";

components: {
  Timer;
}
</script>

<template>
  <div class="hero min-h-screen">
    <div class="hero-content flex flex-col">
      <Timer></Timer>
    </div>
  </div>
</template>
