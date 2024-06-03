<script setup>
import { useRouter } from "vue-router";
const { questionLength, correctAnswers, quiz } = defineProps([
  "questionLength",
  "correctAnswers",
  "quiz",
]);
</script>
<template>
  <div>
    <h2>{{ quiz.name }} Questions</h2>
    <h1>Result</h1>
    <p>{{ correctAnswers }} / {{ questionLength }}</p>
  </div>
</template>
<style scoped>
div {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
p {
  font-size: 63px;
  font-weight: 200;
}
</style>
