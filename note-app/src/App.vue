<script setup>
import { ref } from "vue";
import { watch } from "vue";

const modal = ref(false);
const newNote = ref("");
const errorMessage = ref("");
const notes = ref([]);

const addNote = () => {
  if (newNote.value.length < 10) {
    return (errorMessage.value = "hey! add more characters");
  }
  notes.value.push({
    id: Math.floor(Math.random() * 10000),
    text: newNote.value,
    date: new Date(),
  });
  resetNote();
};

const resetNote = () => {
  modal.value = false;
  newNote.value = "";
  modal.value = false;
  errorMessage.value = "";
};

// Watcher to toggle off the error message when the character length is correct
watch(newNote, (newValue) => {
  if (newValue.length >= 10) {
    errorMessage.value = "";
  }
});
</script>
<template>
  <div v-if="modal" class="overlay">
    <div class="card-new">
      <textarea
        v-model.trim="newNote"
        autofocus="true"
        placeholder="Type something"
        class="text-area"
        name="note"
        id="note"
        cols="30"
        rows="30"
      ></textarea>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      <div class="buttons">
        <button @click="resetNote()" class="button-note">Cancel</button>
        <button
          @click="addNote()"
          class="button-note"
          :style="{ opacity: errorMessage ? 0.5 : 1 }"
        >
          Add
        </button>
      </div>
    </div>
  </div>
  <div class="page">
    <div class="header">
      <h1>Notes App</h1>
      <button @click="modal = true" class="add-note">+</button>
    </div>
    <div class="cards-container">
      <div v-for="note in notes" :key="note.id" class="card">
        <p class="paragraph">
          {{ note.text }}
        </p>
        <div class="date">{{ note.date.toLocaleDateString("en-US") }}</div>
      </div>
    </div>
  </div>
</template>

<style>
body {
  background-color: #d8cd9e;
}
.overlay {
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.48);
  z-index: 10;
}
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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
}
.paragraph {
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.025em;
  line-height: 1.4em;
}
.date {
  font-size: 12px;
  font-weight: 400;
  opacity: 0.6;
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.add-note {
  outline: none;
  background-color: rgba(0, 0, 0, 0.713);
  color: cornsilk;
  font-size: 22px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border: none;
}
.card {
  flex-basis: 200px;
  flex-grow: 1;
  height: 250px;
  padding: 20px;
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(255, 251, 199, 0.67);
  transition: all 0.2s ease-in-out;
}
.card-new {
  width: 300px;
  height: 350px;
  padding: 26px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgb(232, 229, 196);
  transition: all 0.2s ease-in-out;
}
.text-area {
  background-color: unset;
  border: none;
  outline: none;
  height: 100%;
  resize: none;
}
.buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.button-note {
  background-color: unset;
  border: none;
  font-size: 16px;
  font-weight: 500;
  opacity: 0.8;
}
.error-message {
  color: rgba(129, 32, 15, 0.517);
  padding: 12px 8px;
}
.card:hover {
  background-color: rgba(255, 251, 199, 0.826);
}
</style>
