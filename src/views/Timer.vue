<script setup>
import TimerDisplay from "../components/TimerDisplay.vue";
import Navbar from "../components/Navbar.vue";

components: {
  TimerDisplay;
}
</script>

<template>
  <Navbar></Navbar>
  <TimerDisplay></TimerDisplay>
</template>
