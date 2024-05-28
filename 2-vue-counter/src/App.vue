<script setup>
import { ref } from "vue";
const count = ref(0);

const addVal = () => {
  count.value++;
};

const subVal = () => {
  if (!count.value == 0) {
    count.value--;
  }
};
</script>

<template>
  <div class="container">
    <h3>Lesson 1 - JS counter</h3>
    <h4>The count is...</h4>
    <p id="counter">{{ count }}</p>
    <div class="buttons">
      <button id="substract" @click="subVal()">-</button>
      <button id="add" @click="addVal()">+</button>
    </div>
  </div>
</template>
<style>
* {
  color: black;
}

.container {
  border: 1px solid rgba(0, 0, 0, 0.46);
  margin-right: 40%;
  margin-left: 40%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 12px;
  align-items: center;
}

.buttons {
  display: flex;
  flex-direction: row;
  gap: 6px;
}

body {
  padding: 24px;
  background-color: darkslategray;
}
</style>
