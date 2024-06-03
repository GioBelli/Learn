<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="header">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </header>
  <Transition name="page">
    <RouterView />
  </Transition>
</template>

<style scoped>
header {
  display: flex;
  justify-content: center;
  padding-top: 33px;
  padding-bottom: 12px;
  gap: 16px;
  width: 100%;
}
header a {
  opacity: 0.6;
  text-decoration: none;
  color: black;
}
.router-link-active {
  opacity: 1;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.page-enter-from {
  opacity: 0;
  transform: translateX(200px);
}
.page-enter-active {
  transition: all 0.4s ease;
}
.page-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.page-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.page-leave-active {
  transition: all 0.4s ease;
}
.page-leave-to {
  opacity: 0;
  transform: translateX(-200px);
}
</style>
