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
  name: "Header"
};
</script>

<style scoped lang="scss">
.main {
  position: absolute;
  top: 0;
  left: 0;
  height: 60px;
  width: 100%;
  border-bottom: 1px white solid;
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  z-index: 2;
}
.main div:first-child span:first-child {
  font-size: 2rem;
}
ul {
  display: flex;
  justify-content: space-between;
  width: 70%;
  li {
    list-style: none;
  }
}
</style>
