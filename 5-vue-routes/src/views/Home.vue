<script setup>
import { RouterLink } from "vue-router";
import data from "../data/data.json";
</script>

<template>
  <div class="header">
    <div>
      <h1>Home</h1>
      <p>Popular Frameworks</p>
    </div>
    <div class="menu">
      <router-link
        class="nav-link"
        v-for="item in data"
        :key="item.id"
        :to="`/framework/${item.id}`"
        >{{ item.name }} -></router-link
      >
    </div>
  </div>
</template>
<style scoped>
.menu {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 24px;
}
.nav-link {
  opacity: 0.6;
  text-decoration: none;
  color: #004284;
}
.nav-link:hover {
  opacity: 1;
}
.active {
  opacity: 1;
}
</style>
