<script setup>
import { useRoute } from "vue-router";
import data from "../data/data.json";

const route = useRoute();
const framework = data.find((item) => item.id === Number(route.params.id));
</script>

<template>
  <div class="back"><RouterLink to="/"><- Back</RouterLink></div>
  <div v-if="framework" class="section">
    <h1>{{ framework.name }}</h1>
    <img :src="framework.image" :alt="framework.name" />
    <p>{{ framework.description }}</p>
  </div>
  <div v-else>Framework not found</div>
</template>

<style scoped>
.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  gap: 24px;
}
h1 {
  font-weight: 700;
  color: black;
  letter-spacing: -1px;
  opacity: 0.7;
  padding-left: 8px;
  padding-right: 8px;
}
img {
  width: 80px;
  padding: 12px;
}
p {
  max-width: 500px;
  text-align: center;
}
.back {
  display: flex;
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
}
.back a {
  text-decoration: none;
  color: #000000;
  opacity: 0.6;
}
</style>
