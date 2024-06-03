<script setup>
import { useRoute } from "vue-router";
import { RouterLink } from "vue-router";
import { ref, watch, computed } from "vue";
import Result from "../components/Result.vue";
import Header from "../components/Header.vue";
import Questions from "../components/Questions.vue";
import data from "../data/data.json";
const currentQuestion = ref(0);
const route = useRoute();
const correctAnswers = ref(0);
const showResult = ref(false);
const checkAnswer = (isCorrect) => {
  if (isCorrect) {
    correctAnswers.value++;
  }
  if (currentQuestion.value === data.length - 1) {
    showResult.value = true;
  }
  currentQuestion.value++;
};

// const d = data.find((item) => item.id === Number(route.params.id)); // 1 uses the id as a number
const d = data.find((item) => item.slug === route.params.id); // 2 uses the id as a string

// const questionStatus = ref(`${currentQuestion.value}/${d.questions.length}`); // using watch
// watch(
//   () => currentQuestion.value,
//   () => {
//     questionStatus.value = `${currentQuestion.value}/${d.questions.length}`;
//   }
// );

const questionStatus = computed(
  () => `${currentQuestion.value}/${d.questions.length}`
);
</script>
<template>
  <div class="page">
    <RouterLink to="/"><- Back</RouterLink>
    <Header v-if="!showResult" :quiz="d" :questionStatus="questionStatus" />
    <Questions
      v-if="!showResult"
      @answerSelected="checkAnswer"
      :quiz="d.questions[currentQuestion]"
    />
    <Result
      v-else
      :quiz="d"
      :questionLength="d.questions.length"
      :correctAnswers="correctAnswers"
    />
    <div v-if="showResult" class="buttons">
      <!-- <button @click="currentQuestion--">Previous</button>
      <button @click="currentQuestion++">Next</button> -->
      <button
        @click="
          currentQuestion = 0;
          showResult = false;
        "
      >
        Start Again
      </button>
    </div>
  </div>
</template>

<style scoped>
.buttons {
  display: flex;
  width: 100%;
  justify-content: center;
}
button {
  background-color: unset;
  padding: 12px 24px;
  border: unset;
  border: 1px solid rgba(0, 0, 0, 0.121);
  border-radius: 8px;
  cursor: pointer;
}
button:hover {
  background-color: rgba(255, 255, 255, 0.077);
}
</style>
