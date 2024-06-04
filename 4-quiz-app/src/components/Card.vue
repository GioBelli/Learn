<script setup>
import { useRouter } from "vue-router";
const { quiz } = defineProps(["quiz"]);
const router = useRouter();

const goToQuiz = () => {
  // router.push({ name: "quiz", params: { id: quiz.id } });
  router.push({ name: "quiz", params: { id: quiz.slug } });
};
</script>

<template>
  <div :key="quiz.id" class="card" @click="goToQuiz">
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
  /* transition: all 0.2s ease-in-out; */
  cursor: pointer;
}
.card:hover {
  background-color: rgba(255, 255, 255, 0.75);
}

img {
  height: 120px;
}
.card-body {
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: 100%;
  /* transition: all 0.2s ease-in-out; */
}
a {
  text-decoration: none;
  color: unset;
}
</style>
