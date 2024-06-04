<script setup>
import { inject } from "vue";
import useColors from "../composables/useColors";

const { colors, resetColors } = useColors();

// const color = inject("color");

const getRedColor = () => {
  console.log(colors.value.r);
};
</script>

<template>
  <div class="nested">
    <p>GreatGrandChild {{ colors }}</p>
    <button @click="resetColors()">Reset</button>
    <button @click="colors.r++">to root ref</button>
    <button @click="getRedColor">get red</button>
  </div>
</template>
