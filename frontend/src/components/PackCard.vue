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