<script setup>
import { RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
</script>

<template>
  <div>
    <Navigation />
    <RouterView />
  </div>
</template>

<style>
.header {
  padding-left: 30px;
  padding-right: 30px;
  gap: 12px;
  display: flex;
  flex-direction: column;
}
</style>
