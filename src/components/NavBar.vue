<template>
  <nav class="navbar">
    <div class="logo">
      <a href="/">
        <img class="resize-logo" src="/ratdojo2.png" alt="" />
      </a>
    </div>
    <!-- <div class="nav-links">
      <h4><a href="/resources">Resources</a></h4>
    </div> -->
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
.logo {
  height: 2em;
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
  width: 60px;
  height: auto;
}
@media (max-width: 768px) {
  /* Adjust for mobile phones */

  .resize-logo {
    width: 40px;
    height: 40px;
  }
}
@media (max-width: 480px) {
  /* Adjust for mobile phones */

  .resize-logo {
    width: 30px;
    height: 30px;
  }
}
</style>
