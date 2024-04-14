<template>
  <nav class="navbar">
    <div class="logo">
      <img class="resize-logo" src="/postratlogo.png" alt="" />
    </div>
    <div class="nav-links">
      <a href="/about">About</a>
      <a href="/resources">Resources</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #ebf5fb; /* Light blue background */
}

.logo a {
  font-weight: bold;
  color: #333;
  text-decoration: none;
}

.nav-links a {
  margin-left: 20px;
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #0056b3;
}
.resize-logo {
  width: 50px;
  height: auto;
}
</style>
