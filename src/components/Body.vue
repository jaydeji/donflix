<template>
  <div>
    <div v-if="popular">
      <Title :title="'Popular'" />
      <div class="holder">
        <Card v-for="(c,key) in popular" :key="key" :data="c" v-on:click="setClick2(c.id)" />
      </div>
      <Trailer v-if="clicked2" v-on:trailer-close="close2" :youtube="video2" />
    </div>
    <div v-if="recommendations">
      <Title :title="'Highly Rated'" />
      <div class="holder">
        <Card v-for="(c,key) in recommendations" :key="key" :data="c" v-on:click="setClick(c.id)" />
      </div>
      <Trailer v-if="clicked" v-on:trailer-close="close" :youtube="video1" />
    </div>
  </div>
</template>

<script>
import Title from "./Title";
import Card from "./Card";
import Trailer from "./Trailer";
export default {
  name: "Body",
  data() {
    return {
      clicked: false,
      clicked2: false,
      id: "",
      id2: "",
    };
  },
  methods: {
    setClick(id) {
      this.id = id;
      this.clicked = true;
      this.$store.dispatch("getVideo", { url: id, number: 1 });
    },
    setClick2(id) {
      this.id2 = id;
      this.clicked2 = true;
      this.$store.dispatch("getVideo", { url: id, number: 2 });
    },
    close() {
      this.clicked = false;
    },
    close2() {
      this.clicked2 = false;
    },
  },
  components: {
    Title,
    Card,
    Trailer,
  },
  created: function () {
    this.$store.dispatch("recommended");
    this.$store.dispatch("popular");
  },
  computed: {
    recommendations() {
      return this.$store.getters.recommendations;
    },
    popular() {
      return this.$store.getters.popular;
    },
    video1() {
      const x = this.$store.state;
      return x?.video_url
        ? `http://www.youtube.com/embed/${x.video_url}`
        : false;
    },
    video2() {
      const x = this.$store.state;
      return x?.video_url2
        ? `http://www.youtube.com/embed/${x.video_url2}`
        : false;
    },
  },
};
</script>

<style >
.holder {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>