<script setup>
import { inject } from "vue";
import useColors from "../composables/useColors";
import { useColorsStore } from "@/stores/colors";

const { colors, resetColors, halfColors, doubleColorsWithParams } =
  useColorsStore();

// const color = inject("color");
</script>

<template>
  <div class="nested">
    {{ halfColors }}
    <p>Red: {{ colors.r }}</p>
    <p>Green: {{ colors.g }}</p>
    <p>Blue: {{ colors.b }}</p>
    <button @click="resetColors()">Reset</button>
    <button @click="colors.r++">+1 to red</button>
    <button @click="(colors.r = 0), (colors.g = 0), (colors.b = 0)">
      Reset Colors manually
    </button>
    <p>Double colors with Params</p>
    {{ doubleColorsWithParams(colors.r, colors.g, colors.b) }}
  </div>
</template>
