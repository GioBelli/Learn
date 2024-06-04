<script setup>
import axios from "axios";
import { ref, watch } from "vue";
import Card from "./Card.vue";

const page = ref(1);
const characters = ref([null]);

const response = await axios.get(
  "https://rickandmortyapi.com/api/character?page=1"
);
characters.value = response.data;

watch(page, async () => {
  const res = await axios.get(
    `https://rickandmortyapi.com/api/character?page=${page.value}`
  );
  characters.value = res.data;
});
</script>
<template>
  <div class="cards-container">
    <Card
      v-for="char in characters.results"
      :name="char.name"
      :id="char.id"
      :image="char.image"
    />
  </div>
  <div class="pagination">
    <div class="pagination-pages">
      <span
        v-for="n in characters.info.pages"
        :class="`page ${page === n ? 'active' : ''}`"
        :key="n"
        @click="page = n"
      >
        {{ n }}
      </span>
    </div>
    <div class="buttons">
      <button @click="page <= 1 ? (page = 1) : page--">Previous</button>
      <button @click="page++">Next</button>
    </div>
  </div>
</template>
<style scoped>
.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 22px;
}
.pagination-pages {
  display: flex;
  flex-direction: row;
  border: 1px solid rgba(0, 0, 0, 0.121);
  overflow: hidden;
  border-radius: 8px;
}
.page {
  padding: 4px 12px;
  font-size: 14px;
  font-weight: 500;
  color: black;
  cursor: pointer;
  opacity: 0.5;
}
.page.active {
  background-color: rgba(0, 0, 0, 0.085);
  opacity: 1;
}
.buttons {
  display: flex;
  gap: 12px;
  flex-direction: row;
}
.pagination {
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-top: 32px;
  padding-bottom: 44px;
  flex-direction: column;
  width: 100%;
  overflow: hidden;

  padding-bottom: 44px;
}
.pagination button {
  padding: 8px 16px;
  border: 1px solid rgba(0, 0, 0, 0.121);
  border-radius: 8px;
  background-color: unset;
  font-size: 14px;
  cursor: pointer;
}
</style>
