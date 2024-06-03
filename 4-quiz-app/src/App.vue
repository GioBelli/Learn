<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <Transition name="fade">
    <RouterView />
  </Transition>
</template>
<style>
#app {
  background-color: #d5d8d6;
  height: 100vh;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
