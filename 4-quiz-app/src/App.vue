<script setup>
import gsap from "gsap";

import { RouterView } from "vue-router";

// Transition Hooks

const routeTransitionBeforeEnter = (el) => {
  gsap.set(el, { scale: 0.9, opacity: 0 });
};
const routeTransitionEnter = (el, done) => {
  gsap.to(el, {
    duration: 0.6,
    opacity: 1,
    scale: 1,
  });
};
const routeTransitionLeave = (el, done) => {
  gsap.to(el, {
    duration: 0.3,

    opacity: 0,
    scale: 0.9,
    onComplete: done,
  });
};
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition
      mode="out-in"
      @before-enter="routeTransitionBeforeEnter"
      @enter="routeTransitionEnter"
      @leave="routeTransitionLeave"
    >
      <component :is="Component" />
    </transition>
  </router-view>
</template>
<style>
#app {
  background-color: #d5d8d6;
  height: 100vh;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
