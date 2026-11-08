<!--
File: Navbar.vue
Description: Provides navigation between the Home, Pack Opening, and Collection pages.
-->
<template>
  <header class="navbar">
    <RouterLink to="/" class="logo">
      One Piece Booster Box
    </RouterLink>

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/pack">Open Packs</RouterLink>
      <RouterLink to="/collection>">My Collection</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 8%;
  background: #101728;
  border-bottom: 1px solid #30394d;
}

.logo {
  color: #f5c76a;
  font-size: 22px;
  font-weight: bold;
  text-decoration: none;
}

nav {
  display: flex;
  gap: 30px;
}

nav a {
  color: white;
  text-decoration: none;
}

nav a:hover,
nav a.router-link-exact-active {
  color: #f5c76a;
}

@media (max-width: 600px) {
  .navbar {
    flex-direction: column;
    gap: 20px;
  }

  nav {
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
  }
}
</style>