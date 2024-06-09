<script setup lang="ts">
let name = "John";
let age = 30;
let sex = false;
let occupation; //no type defined

occupation = "developer"; //type defined as string

// const arrayOfNumbers: number[] = []; //type defined as number
const arrayOfNumbers: (number | string)[] = []; //type defined as number or string
// const arrayOfNumbers = []; //type defined as any

arrayOfNumbers.push(27);
arrayOfNumbers.push("27");
// arrayOfNumbers.push(false); //error
// arrayOfNumbers.push([]); //error

enum GENDER {
  MALE,
  FEMALE,
}

interface Employee {
  name: string;
  age: number;
  sex: GENDER;
  occupation?: string;
}

const employee: Employee = {
  name: "John",
  age: 24,
  sex: GENDER.MALE,
};

employee.occupation = "programmer";
employee.sex = GENDER.FEMALE;
</script>

<template>
  <header>
    <div class="wrapper"></div>
  </header>
</template>

<style>
body {
  background-color: rgb(140, 140, 140);
}
</style>
