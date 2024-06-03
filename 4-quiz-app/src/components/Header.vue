<script setup>
const { quiz, questionStatus } = defineProps(["quiz", "questionStatus"]);
</script>

<template>
  <div class="header-question">
    <h1>{{ quiz.name }}</h1>
    <div class="dots">
      <span class="dot active"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </div>
    <p>{{ questionStatus }} Question</p>
  </div>
</template>
<style scoped>
h1 {
  padding: 0;
}
.header-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 32px;
  align-items: baseline;
}

.dots {
  display: flex;
  gap: 8px;
  padding-left: 3px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: black;
  opacity: 0.3;
}

.dot.active {
  opacity: 1;
}
</style>
