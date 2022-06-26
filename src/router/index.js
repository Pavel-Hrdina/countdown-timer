import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Timer from "../views/Timer.vue";

const router = createRouter({
  mode: "history",
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/timer", name: "Timer", component: Timer },
  ],
});

export default router;
