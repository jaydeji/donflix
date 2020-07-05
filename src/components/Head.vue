<template>
  <div
    class="showcase"
    :style="{
      backgroundImage:
        'url(https://image.tmdb.org/t/p/original' + images[0] + ')',
    }"
  >
    <Header></Header>
  </div>
</template>

<script>
import Header from './Header.vue';

export default {
  name: 'Head',
  components: { Header },
  props: {},
  created: function() {
    this.$store.dispatch('nowPlaying');
  },
  computed: {
    images() {
      return this.$store.getters.images;
    },
  },
};
</script>

<style scoped>
.showcase {
  position: relative;
  height: 100vh;
  width: 100%;
  background-size: cover;
  z-index: -2;
}
.showcase::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: inset 80px -100px 100px #000, inset -80px 0px 100px #000;
}
span {
  font-size: 2.5rem;
  color: white;
}
</style>
