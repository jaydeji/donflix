<template
  >
  <div>
    <div
      v-if="single"
      class="showcase"
      :style="{
      backgroundImage:
        'url(https://image.tmdb.org/t/p/original' + single.backdrop_path + ')',
    }"
      @mouseover="state.isHovering = true"
      @mouseout="state.isHovering = false"
    >
      <div v-if="state.show" :class="{hovering: state.isHovering}" class="play">
        <span>{{single.original_title}}</span>
        <img @click="getVideo" src="/assets/play.png" alt />
      </div>
      <Trailer
        v-if="!state.show"
        :youtube="video3"
        :height="'100%'"
        :width="'100%'"
        v-on:trailer-close="state.show=true"
      />
    </div>
    <div v-if="single" class="details">
      <img :src="'https://image.tmdb.org/t/p/original' + single.poster_path" alt />
      <div>
        <span class="mb-1">{{single.original_title}}</span>
        <span class="mb-1">{{single.overview}}</span>
        <span class="mb-1">Duration: {{duration}}</span>
        <span class="mb-1">
          <i class="fa fa-star" aria-hidden="true" style="color:gold"></i>
          {{single.vote_average}}
        </span>
        <button class="watch mb-1">
          <i class="fa fa-play" aria-hidden="true"></i> WATCH
        </button>
        <button class="add" style="margin-left:-20px" @click="handleClick">
          <i class="fa fa-plus" aria-hidden="true"></i>
          {{!exists?'ADD TO':'REMOVE FROM'}} LIST
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Trailer from "@/components/Trailer";
import { reactive, computed, watchEffect } from "vue";
import { useStore } from "vuex";

export default {
  name: "OtherHead",
  components: {
    Trailer,
  },
  props: ["id"],
  setup(props) {
    const store = useStore();
    const state = reactive({
      isHovering: false,
      show: true,
    });
    store.dispatch("single", props.id);
    store.dispatch("similar", props.id);

    const single = computed(() => store.state.single || false);
    const similar = computed(() => store.getters.similar || false);
    const duration = computed(() => {
      const x = single.value.runtime;
      return Math.floor(x / 60) + "h : " + (x % 60) + "m";
    });
    const video3 = computed(() => {
      const x = store.state.video_url3;
      return x ? `http://www.youtube.com/embed/${x}?autoplay=1` : false;
    });
    const exists = computed(() =>
      store.state.list?.find((e) => e.id === single.value.id)
    );

    const getVideo = () => {
      state.show = false;
      store.dispatch("getVideo", { url: single.value.id, number: 3 });
    };
    const handleClick = () => {
      const e = single;
      store.commit("LIST", {
        url: `url(https://image.tmdb.org/t/p/original${e.poster_path})`,
        title: e.original_title,
        year: e?.release_date.slice(0, 4),
        rating: e.vote_average,
        id: e.id,
      });
    };

    watchEffect(() => store.dispatch("single", props.id));
    watchEffect(() => store.dispatch("similar", props.id));

    return {
      state,
      getVideo,
      handleClick,
      similar,
      duration,
      video3,
      exists,
      single,
    };
  },
};
</script>

<style scoped lang="scss">
.showcase {
  position: relative;
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 0;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
}
.showcase:hover::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: inset 80px -100px 100px #000, inset -80px 0px 100px #000;
}
.details {
  display: flex;
  margin: 50px 30px;
  img {
    height: 250px;
    margin-right: 30px;
  }
  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}
.play {
  display: none;
  flex-direction: column;
  align-items: center;
  z-index: 5;
  img {
    cursor: pointer;
  }
}
.hovering {
  display: flex;
}
</style>
