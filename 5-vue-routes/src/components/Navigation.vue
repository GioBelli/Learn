<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav>
    <RouterLink active-class="active" class="nav-link" to="/">Home</RouterLink>
    <RouterLink active-class="active" class="nav-link" to="/about"
      >About</RouterLink
    >
  </nav>
</template>

<style scoped>
nav {
  padding: 30px;
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.nav-link {
  opacity: 0.6;
  text-decoration: none;
  color: #2c3e50;
}
.active {
  opacity: 1;
}
</style>
