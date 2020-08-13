<template
  >
  <div
    v-if="single"
    class="showcase"
    :style="{
      backgroundImage:
        'url(https://image.tmdb.org/t/p/original' + single.backdrop_path + ')',
    }"
  >
    <Details :detail="single"></Details>
  </div>
</template>

<script>
import Details from "./Details";
export default {
  name: "OtherHead",
  components: { Details },
  created: function () {
    this.$store.dispatch("single", this.$route.params.id);
    this.$store.dispatch("similar", this.$route.params.id);
  },
  computed: {
    single() {
      return this.$store.state.single || false;
    },
    similar() {
      return this.$store.getters.similar || false;
    },
  },
};
</script>

<style scoped>
.showcase {
  position: absolute;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 0;
  background-color: black;
}
</style>
