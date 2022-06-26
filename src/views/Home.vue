<script setup>
import Navbar from "../components/Navbar.vue";

components: {
  Navbar;
}
</script>

<template>
  <Navbar></Navbar>
  <div class="hero min-h-screen">
    <div class="hero-content">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold leading-relaxed">Hello there</h1>
        <p class="py-6 leading-relaxed">
          A simple timer that will give you breaks after given time is up and
          show you how long you should rest for and what exercises you can do to
          prevent bad posture or pain.
        </p>
        <button class="btn btn-primary leading-relaxed">
          <router-link to="/timer">Start the clock</router-link>
        </button>
      </div>
    </div>
  </div>
</template>
