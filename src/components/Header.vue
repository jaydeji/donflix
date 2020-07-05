<template>
  <div class="main">
    <div>
      <span>DONFLIX</span>
    </div>
    <ul>
      <li>Home</li>
      <li>Movies</li>
      <li>My List</li>
      <li>Search</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped lang="scss">
.main {
  height: 60px;
  border-bottom: 1px white solid;
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.main div:first-child span:first-child {
  font-size: 2rem;
  color: white;
}
ul {
}
</style>
