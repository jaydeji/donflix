<template>
  <div>
    <Header />
    <OtherHead />
    <DetailsImages />
    <div v-if="similar">
      <Title :title="'Similar Movies'" />
      <div>
        <div class="holder">
          <Card v-for="(c,key) in similar" :key="key" :data="c" v-on:click="setClick(c.id)" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import OtherHead from "@/components/OtherHead";
import Card from "@/components/Card";
import Title from "@/components/Title";
import Header from "@/components/Header";
import DetailsImages from "@/components/DetailsImages";
import Footer from "@/components/Footer";

export default {
  components: {
    OtherHead,
    Card,
    Title,
    Header,
    DetailsImages,
    Footer,
  },
  created() {
    this.$store.dispatch("getImages", this.$route.params.id);
  },
  computed: {
    similar() {
      return this.$store.getters.similar || false;
    },
  },
  watch: {
    $route() {
      this.$store.dispatch("getImages", this.$route.params.id);
    },
  },
};
</script>

<style scoped>
</style>
