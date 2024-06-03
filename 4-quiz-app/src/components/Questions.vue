<script setup>
const { quiz } = defineProps(["quiz"]);

const emit = defineEmits(["answerSelected"]);

// This function is called when the user selects an answer.
// It takes a boolean parameter `isCorrect` which indicates whether the answer is correct or not.
// It emits an event called "answerSelected" with the `isCorrect` parameter as the payload.
// This event can be listened to in the parent component to update the score or move to the next question.

const answerSelected = (isCorrect) => {
  emit("answerSelected", isCorrect);
};
</script>
<template>
  <div class="question-container">
    <h2>{{ quiz.text }}</h2>
  </div>
  <div class="answers-container">
    <div
      @click="answerSelected(a.isCorrect)"
      v-for="a in quiz.options"
      :key="a.id"
      class="answer"
    >
      <div>{{ a.label }}.</div>
      <p>{{ a.text }}</p>
    </div>
  </div>
</template>
<style scoped>
h2 {
  font-size: 24px;
  font-weight: 500;
}

.answer {
  display: flex;
  flex-direction: row;
  gap: 12px;
  padding: 8px 18px;
  background-color: rgba(238, 242, 246, 0.312);
  border-radius: 12px;
  cursor: pointer;
  font-size: 22px;
  font-weight: 400;
}

.answer:hover {
  background-color: rgba(238, 242, 246, 0.5);
}
.answer div {
  font-weight: 500;
  opacity: 0.4;
}

.answers-container {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
</style>
