<script setup>
import { defineProps } from "vue";
const { quiz } = defineProps(["quiz"]);
</script>

<template>
  <div :key="quiz.id" class="card">
    <img :src="quiz.img" alt="" />
    <div class="card-body">
      <h3>{{ quiz.name }}</h3>
      <p>{{ quiz.questions.length }} Questions</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  max-width: 300px;
  height: auto;
  overflow: hidden;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(237, 243, 237, 0.67);
  transition: all 0.2s ease-in-out;
}
.card:hover {
  background-color: rgba(255, 255, 255, 0.75);
}
img {
  height: auto;
}
.card-body {
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: 100%;
}
</style>
