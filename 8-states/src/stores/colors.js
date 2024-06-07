import { defineStore } from "pinia";

export const useColorsStore = defineStore("colors", {
  state: () => {
    return {
      colors: {
        r: 100,
        g: 20,
        b: 100,
      },
    };
  },
  actions: {
    // actions are functions that mutate the state
    resetColors() {
      this.colors = {
        r: 0,
        g: 0,
        b: 0,
      };
    },
  },
  getters: {
    // getters are just computed properties that return a value based on the state
    halfColors: (state) => {
      return {
        r: state.colors.r / 2,
        g: state.colors.g / 2,
        b: state.colors.b / 2,
      };
    },
    doubleColorsWithParams: (state) => {
      // reactive function with parameters
      return (red, green, blue) =>
        (state.colors = {
          r: red * 2,
          g: green * 2,
          b: blue * 2,
        });
    },
  },
});
