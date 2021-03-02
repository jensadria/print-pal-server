<template>
  <header>
    <nav>
      <ul>
        <!-- <li><router-link to="/price">Price Calculator</router-link></li> -->
        <li><router-link to="/nup">N-Up Calculator</router-link></li>
        <li><router-link to="/cuttinglist">Cutting List</router-link></li>
      </ul>
      <h1>Print Pal</h1>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  background: var(--mid-blue);
  padding: 0.5rem;
}

header h1 {
  color: #fff;
}

a {
  text-decoration: none;
  color: #fff;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
  border-radius: 0.5rem;
}

a.router-link-active {
  background: var(--light-blue);
}

a:not(.router-link-active):hover {
  background: var(--dark-blue);
}

header nav {
  width: 95%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>
