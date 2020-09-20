<template>
  <div style="margin-top:80px">
    <Header />
    <div v-if="list">
      <div class="title">Favourites</div>
      <div class="holder">
        <Card v-for="(c,key) in list" :key="key" :data="c" v-on:click="setClick(c.id)" />
      </div>
    </div>
    <div v-else>No Favourites</div>
  </div>
</template>

<script>
import Card from "../components/Card";
import Header from "../components/Header";

export default {
  name: "List",
  components: {
    Card,
    Header,
  },
  computed: {
    list() {
      const x = this.$store.state.list;
      return x?.length ? x : null;
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 2rem;
  text-align: center;
  margin: 20px;
}
</style>