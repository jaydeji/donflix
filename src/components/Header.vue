<template>
  <div class="main">
    <div class="home">
      <router-link to="/">DONFLIX</router-link>
    </div>
    <ul>
      <li style="margin-right:20px">
        <router-link to="/favourites">My List</router-link>
      </li>
      <li>
        <router-link to="/search">
          <i class="fa fa-search"></i>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Header",
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
.main div:first-child a:first-child {
  font-size: 2rem;
  cursor: pointer;
}
ul {
  display: flex;
  justify-content: flex-end;
  width: 70%;
  li {
    list-style: none;
    cursor: pointer;
    &:hover {
      color: green;
    }
  }
}
.home:hover {
  color: green;
}
</style>
