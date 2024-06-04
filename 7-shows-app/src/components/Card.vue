<script setup>
const { name, image, id } = defineProps(["name", "image", "id"]);
</script>
<template>
  <div class="card" :id="id">
    <img :src="image" />
    <div class="body">
      <div class="name">{{ name }}</div>
      <slot></slot>
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: baseline;
  background-color: white;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.081);
  border-radius: 12px;
  overflow: hidden;
}
img {
  width: 100%;
  height: auto;
}
.name {
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.2rem;
}
.body {
  padding: 12px 16px;
}
</style>
