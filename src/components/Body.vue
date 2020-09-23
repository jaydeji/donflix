<template>
  <div>
    <div v-if="popular">
      <Title :title="'Popular'" />
      <div>
        <div class="holder">
          <Card v-for="(c,key) in popular" :key="key" :data="c" v-on:click="setClick2(c.id)" />
        </div>
      </div>
      <Trailer v-if="state.clicked2" v-on:trailer-close="close2" :youtube="video2" />
    </div>
    <div v-if="recommendations">
      <Title :title="'Trending'" />
      <div>
        <div class="holder">
          <Card
            v-for="(c,key) in recommendations"
            :key="key"
            :data="c"
            v-on:click="setClick(c.id)"
          />
        </div>
      </div>
      <Trailer v-if="state.clicked" v-on:trailer-close="close" :youtube="video1" />
    </div>
  </div>
</template>

<script>
import Title from "./Title";
import Card from "./Card";
import Trailer from "./Trailer";
import { reactive, computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "Body",
  setup() {
    const store = useStore();
    const state = reactive({
      clicked: false,
      clicked2: false,
      id: "",
      id2: "",
    });

    store.dispatch("recommended");
    store.dispatch("popular");

    const setClick = (id) => {
      state.id = id;
      state.clicked = true;
      store.dispatch("getVideo", { url: id, number: 1 });
    };
    const setClick2 = (id) => {
      state.id2 = id;
      state.clicked2 = true;
      store.dispatch("getVideo", { url: id, number: 2 });
    };
    const close = () => {
      state.clicked = false;
    };
    const close2 = () => {
      state.clicked2 = false;
    };

    const recommendations = computed(() => store.getters.recommendations);
    const popular = computed(() => store.getters.popular);
    const video1 = computed(() => {
      const x = store.state;
      return x?.video_url
        ? `http://www.youtube.com/embed/${x.video_url}`
        : false;
    });
    const video2 = computed(() => {
      const x = store.state;
      return x?.video_url2
        ? `http://www.youtube.com/embed/${x.video_url2}`
        : false;
    });

    return {
      state,
      setClick,
      setClick2,
      close,
      close2,
      recommendations,
      popular,
      video1,
      video2,
    };
  },
  components: {
    Title,
    Card,
    Trailer,
  },
};
</script>

<style >
.holder {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
}
</style>