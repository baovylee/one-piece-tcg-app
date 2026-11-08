<!--
File: PackCard.vue
Description: Reusable component for displaying
One Piece TCG booster packs
-->

<script setup>
defineProps({
  pack: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="pack-card">
    <div class="pack-image">
      <img v-if="pack.image" :src="pack.image" :alt="pack.name" />
      <span v-else>{{pack.id}}</span>
    </div>
  </div>

  <h2>{{pack.name}}</h2>
  <p>{{pack.id}}</p>
</template>

<style scoped>
.pack-card {
  background: #151e32;
  border: 1px solid #34415c;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  color: white;
}

.pack-image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

button {
  padding: 12px 24px;
  background: #d4af37;
  color: #101521;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>