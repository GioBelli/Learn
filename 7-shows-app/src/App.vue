<script setup>
import CardsRickAndMorty from "./components/CardsRickAndMorty.vue";
</script>

<template>
  <main>
    <h1>Rick & Morty Characters</h1>
    <Suspense>
      <template #default>
        <CardsRickAndMorty />
      </template>
      <template #loading>
        <div>Loading...</div>
      </template>
    </Suspense>
  </main>
</template>

<style>
body {
  background-color: rgb(234, 238, 238);
}
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
main {
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  gap: 24px;
}
</style>
