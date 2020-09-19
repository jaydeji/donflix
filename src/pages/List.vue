<template>
  <div>
    <div v-if="list" class="holder">
      <Card v-for="(c,key) in list" :key="key" :data="c" v-on:click="setClick(c.id)" />
    </div>
    <div v-else>No Favourites</div>
  </div>
</template>

<script>
import Card from "../components/Card";

export default {
  name: "List",
  components: {
    Card,
  },
  data() {
    return {};
  },
  computed: {
    list() {
      const x = this.$store.state.list;
      return x?.length ? x : null;
    },
  },
};
</script>

<style>
</style>