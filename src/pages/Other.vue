<template>
  <div>
    <OtherHead />
    <div v-if="similar">
      <Title :title="'Similar movies'" />
      <div class="holder">
        <Card v-for="(c,key) in similar" :key="key" :data="c" v-on:click="setClick(c.id)" />
      </div>
      <Trailer v-if="clicked" v-on:trailer-close="close" :youtube="video1" />
    </div>
  </div>
</template>

<script>
import OtherHead from "@/components/OtherHead";
import Trailer from "@/components/Trailer";
import Card from "@/components/Card";
import Title from "@/components/Title";

export default {
  components: {
    OtherHead,
    Card,
    Trailer,
    Title,
  },
  computed: {
    similar() {
      return this.$store.getters.similar || false;
    },
  },
};
</script>

<style></style>
