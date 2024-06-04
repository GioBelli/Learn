<script setup>
import { ref, reactive, provide } from "vue";
import Parent from "./components/Parent.vue";
import useColors from "./composables/useColors";

const { colors } = useColors();

// const r = ref(0);
// const g = ref(0);
// const b = ref(0);

// const color = ref({
//   r: 0,
//   g: 0,
//   b: 0,
// });

// const color = reactive({
//   r: 0,
//   g: 0,
//   b: 0,
// });

// provide("color", color);
</script>
<template>
  <main :style="`background-color: rgb(${colors.r},${colors.g},${colors.b})`">
    <h1>Color App</h1>

    <div class="container">
      <input
        slide="horizontal"
        type="range"
        min="0"
        max="255"
        v-model="colors.r"
      />
      <input
        slide="horizontal"
        type="range"
        min="0"
        max="255"
        v-model="colors.g"
      />
      <input
        slide="horizontal"
        type="range"
        min="0"
        max="255"
        v-model="colors.b"
      />
    </div>
    <Parent />
  </main>
</template>

<style>
main {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 42px;
}
h1 {
  filter: invert();
}
.container {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.nested {
  display: flex;
  flex-direction: column;
  padding: 8px;
  /* background-color: white; */
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.46);
  gap: 6px;
}
</style>
