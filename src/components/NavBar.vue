<template>
  <nav class="navbar">
    <div class="logo">
      <a href="/">
        <img class="resize-logo" src="/ratdojo2.png" alt="" />
      </a>
    </div>
    <div class="nav-links">
      <h4><a href="/resources">Resources</a></h4>
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
  background-color: #ebf5fb; /* Light blue background */
}

.logo a {
  font-weight: bold;
  color: #333;
  text-decoration: none;
}

.nav-links a {
  margin-left: 20px;
  margin-right: 20px;
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #0056b3;
}
.resize-logo {
  width: 70px;
  height: auto;
}
</style>
