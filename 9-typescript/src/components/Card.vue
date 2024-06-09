<script setup lang="ts">
import { GENDER, type Invitees } from "../types";
// const props = defineProps(["invitee"]);

defineProps<{
  invitee: Invitees;
  // invitee: {
  //   id: number;
  //   name: string;
  //   gender: GENDER;
  // };
}>();
</script>
<template>
  <li>
    {{ invitee.name }}
    <span
      :class="`gender ${invitee.gender === GENDER.MALE ? 'male' : 'female'}`"
    ></span>
  </li>
</template>
<style scoped>
li {
  list-style: none;
  margin-bottom: 12px;
  font-size: 14px;
  border-radius: 24px;
  padding: 6px 12px;
  background-color: rgba(255, 255, 255, 0.263);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.gender {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: inline-block;
  margin-left: 8px;
}

.male {
  background-color: rgb(0, 136, 255);
}
.female {
  background-color: rgb(255, 0, 136);
}
</style>
