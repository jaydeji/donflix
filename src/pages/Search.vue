<template>
  <div style="margin-top:80px">
    <Header />
    <div style="display:flex;justify-content:center;margin:20px 0">
      <form v-on:submit.prevent="handleSearch" class="search-box">
        <input v-model.trim="search" />
        <i class="fa fa-search" v-on:click="handleSearch"></i>
      </form>
    </div>
    <div v-if="movies===null" class="spinner">
      <i class="fas fa-2x fa-spinner fa-spin"></i>
    </div>
    <div v-else-if="movies===undefined" class="spinner">
      <i class="fa fa-10x fa-search"></i>
    </div>
    <div v-else class="spinner">
      <Title :title="'Search Results'" />
      <div>
        <div class="holder">
          <Card v-for="(c,key) in movies" :key="key" :data="c" v-on:click="setClick(c.id)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
import Title from "@/components/Title";
import Header from "@/components/Header";

export default {
  components: {
    Card,
    Title,
    Header,
  },
  data() {
    return {
      search: "",
    };
  },
  methods: {
    handleSearch() {
      this.$store.commit("CLEARMOVIE");
      this.$store.dispatch("searchMovie", this.search);
    },
  },
  computed: {
    movies() {
      return this.$store.getters.searchMovie;
    },
  },
  beforeDestroy() {
    this.$store.commit("RESETMOVIE");
  },
};
</script>

<style scoped lang="scss">
.search-box {
  width: 50%;
  position: relative;
  color: green;
  font-weight: bold;
  input {
    width: 100%;
    padding: 5px 10px;
    font-size: 1.5rem;
  }
  i {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
}

.spinner i {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: green;
}
</style>