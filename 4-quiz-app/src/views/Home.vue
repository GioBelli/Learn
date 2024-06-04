<script setup>
import { ref, watch } from "vue";
import Card from "../components/Card.vue";
import q from "../data/data.json";
import gsap from "gsap";

const quizes = ref(q);
const search = ref("");
const empty = ref(false);

const beforeEnter = (el) => {
  el.style.transform = "translateY(-20px)";
  el.style.opacity = 0;
  // gsap.to(el, { //doesn't work well
  //   y: -20,
  //   opacity: 0,
  // });
};

const onEnter = (el) => {
  gsap.to(el, {
    duration: 1.5,
    y: 0,
    opacity: 1,
    ease: "elastic.out(1, 0.7)",
    delay: el.dataset.index * 0.12,
  });
};

const onLeave = (el) => {
  gsap.to(el, {
    duration: 1,
    opacity: 0,
    scale: 0.1,
  });
};
// Watch for changes in the `search` ref.
// Filter the `q` array based on the search input.
// Update the `quizes` ref with the filtered array.
// If the filtered array is empty, set `empty` to true.
// Otherwise, set `empty` to false.
watch(search, () => {
  quizes.value = q.filter((quiz) =>
    quiz.name.toLowerCase().includes(search.value.toLowerCase())
  );
  empty.value = quizes.value.length === 0;
});
</script>

<template>
  <div class="page">
    <div class="header">
      <h1>Quiz App</h1>
      <input
        v-model.trim="search"
        type="text"
        class="search"
        placeholder="Search..."
      />
    </div>
    <div class="cards-container">
      <div v-if="empty" class="empty">
        <p>
          No result with <b>{{ search }}</b> 🤔
        </p>
      </div>
      <TransitionGroup
        @before-enter="beforeEnter"
        @enter="onEnter"
        @leave="onLeave"
        appear
      >
        <Card
          v-for="(quiz, index) in quizes"
          :key="quiz.id"
          :quiz="quiz"
          :data-index="index"
        />
      </TransitionGroup>
    </div>
  </div>
</template>
<style>
.page {
  max-width: 800px;
  display: flex;
  margin-right: auto;
  margin-left: auto;
  flex-direction: column;
  padding: 42px;
  gap: 24px;
}
h1 {
  font-weight: 700;
  color: black;
  letter-spacing: -2px;
  opacity: 0.7;
  padding-left: 8px;
  padding-right: 8px;
}
.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 12px;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
}

.search {
  width: 220px;
  height: 40px;
  border: none;
  border-radius: 8px;
  padding-left: 16px;
  font-size: 16px;
  outline: none;
  background-color: rgba(0, 0, 0, 0.03);
}
.search::placeholder {
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.01em;
  line-height: 1.4em;
}
::selection {
  background: rgb(181, 255, 149);
}
.empty {
  text-align: center;
  width: 100%;
  height: 300px;
  font-size: 24px;
  line-height: 300px;
  background-color: rgba(0, 0, 0, 0.01);
  border-radius: 12px;
}
b {
  font-weight: 500;
}
</style>
