<script setup lang="ts">
import { ref, computed } from "vue";
import Card from "./components/Card.vue";
import { GENDER, type Invitees } from "./types";

const name = ref("");
const gender = ref(GENDER.MALE);
const invitees = ref<Invitees[]>([]);

const addInvitee = (): void => {
  // return type is void as it doesn't return anything, this is done because if we return anything it will throw an error
  if (name.value === "") {
    return;
  }
  invitees.value.push({
    id: Math.floor(Math.random() * 10000),
    name: name.value,
    gender: gender.value,
  });
  name.value = "";
  // gender.value = GENDER.MALE;
};

const count = computed<{
  male: number;
  female: number;
}>(() => {
  return invitees.value.reduce(
    (acc, invitee) => {
      if (invitee.gender === GENDER.MALE) {
        return {
          ...acc,
          male: acc.male + 1,
        };
      } else {
        return {
          ...acc,
          female: acc.female + 1,
        };
      }
    },
    { male: 0, female: 0 }
  );
});
</script>

<template>
  <main>
    <div class="wrapper">
      <h1>Party list app</h1>
      <input
        type="text"
        placeholder="Enter a name"
        v-model="name"
        @keypress.enter="addInvitee"
      />
      <select name="gender" @keypress.enter="addInvitee" v-model="gender">
        <option :value="GENDER.MALE">Male</option>
        <option :value="GENDER.FEMALE">Female</option>
      </select>
      <button @click="addInvitee">Add</button>
      <hr />
      <ul>
        <Card
          v-for="invitee in invitees"
          :key="invitee.id"
          :invitee="invitee"
        />
      </ul>
      <hr />
      <div class="count">
        <span>Male: {{ count.male }}</span>
        <span>Female: {{ count.female }}</span>
      </div>
    </div>
  </main>
</template>

<style>
body {
  background-color: rgb(179, 179, 179);
}

hr {
  width: 300px;
  margin-bottom: 12px;
  margin-top: 12px;
  opacity: 0.2;
}
ul {
  width: 300px;
  padding: 0px;
  margin: 0px;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}
input,
select,
button {
  width: 300px;
  height: 36px;
  border-radius: 5px;
  background-color: unset;
  border: 1px solid gray;
  border: none;
  padding: 0px 12px;
}
input {
  background-color: rgba(0, 0, 0, 0.03);
}

select {
  cursor: pointer;
  background-color: rgba(240, 248, 255, 0.232);
}
button {
  cursor: pointer;
  background-color: rgb(0, 136, 255);
  color: white;
}
button:hover {
  background-color: rgb(17, 144, 255);
}
select:hover {
  background-color: rgba(255, 255, 255, 0.296);
}
main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.count {
  display: flex;
  gap: 12px;
}
</style>
