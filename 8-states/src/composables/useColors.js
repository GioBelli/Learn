import { ref } from "vue";

// Define a function to create a reactive object to store color values
export default function useColors() {
  // Create a reactive object to store color values
  const colors = ref({
    r: 100,
    g: 100,
    b: 100,
  });

  /**
   * Reset the color values to black.
   */
  const resetColors = () => {
    colors.value = {
      r: 0,
      g: 0,
      b: 0,
    };
  };

  /**
   * Update the color values based on the slider input.
   * @param {Event} e - The input event
   */
  /**
   * Update the color values based on the slider input.
   *
   * @example
   * <input type="range" min="0" max="255" v-model="r" @input="updateColorsFromSlider">
   *
   * @param {Event} e - The input event
   */
  const updateColorsFromSlider = (e) => {
    colors.value = {
      r: Number(e.target.r.value),
      g: Number(e.target.g.value),
      b: Number(e.target.b.value),
    };
  };

  const getColors = () => colors.value;

  const changeRed = (n) => {
    colors.value.r = n;
  };

  // Return the reactive color object
  return {
    colors,
    changeRed,
    resetColors,
  };
}
