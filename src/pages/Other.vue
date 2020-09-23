<template>
  <div>
    <Header />
    <OtherHead :id="id" />
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
import { computed, watchEffect } from "vue";
import { useStore } from "vuex";
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
  props: ["id"],
  setup(props) {
    const store = useStore();
    const similar = computed(() => store.getters.similar || false);

    store.dispatch("getImages", props.id);

    watchEffect(() => store.dispatch("getImages", props.id));

    return { similar };
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
