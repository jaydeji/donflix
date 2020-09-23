<template>
  <div style="margin-top:80px">
    <Header />
    <div v-if="list">
      <div class="title">Favourites</div>
      <div class="holder">
        <Card v-for="(c,key) in list" :key="key" :data="c" v-on:click="setClick(c.id)" />
      </div>
    </div>
    <div style="text-align:center" v-else>No Favourites</div>
    <Footer v-if="list" />
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import Card from "../components/Card";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  name: "List",
  components: {
    Card,
    Header,
    Footer,
  },
  setup() {
    const store = useStore();
    const list = computed(() => {
      const x = store.state.list;
      return x?.length ? x : null;
    });
    return { list };
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