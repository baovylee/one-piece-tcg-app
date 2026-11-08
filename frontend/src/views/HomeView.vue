<!--
  HomeView.vue
  Description: Displays the homepage and
  showcases featured One Piece TCG booster packs.
-->

<script setup>
</script>

<template>
  <section>
    <p class="subtitle">ONE PIECE CARD GAME</p>

    <h1>YOUR GRAND LINE ADVENTURE STARTS HERE</h1>

    <p class="description">Open booster packs, find Manga Rare, and build your ultimate collection</p>

    <RouterLink to="/packs" class="explore-btn">
      Explore Packs
    </RouterLink>
  </section>
</template>

<style scoped>
.hero {
  min-height: 70vh;
  padding: 100px 8%;
  background: radial-gradient(circle at 75% 35%, #29385d, #0b1020 65%);
}

.subtitle {
  color: #f5c76a;
  letter-spacing: 3px;
}

h1 {
  max-width: 750px;
  font-size: clamp(30px, 5vw, 64px);
  line-height: 1.15;
}

.description {
  max-width: 750px;
  color: #a6adbd;
  line-height: 1.7;
}

.explore-btn {
  display: inline-block;
  margin-top: 24px;
  padding: 14px 28px;
  color: #101521;
  background: #f5c76a;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
}
</style>
