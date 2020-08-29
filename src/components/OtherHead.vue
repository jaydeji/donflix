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
      @mouseover="isHovering = true"
      @mouseout="isHovering = false"
    >
      <div v-if="show" :class="{hovering: isHovering}" class="play">
        <span>{{single.original_title}}</span>
        <img @click="getVideo" src="/assets/play.png" alt />
      </div>
      <Trailer
        v-if="!show"
        :youtube="video3"
        :height="'100%'"
        :width="'100%'"
        v-on:trailer-close="show=true"
      />
    </div>
    <div v-if="single" class="details">
      <img :src="'https://image.tmdb.org/t/p/original' + single.poster_path" alt />
      <div>
        <span>{{single.original_title}}</span>
        <span>{{single.overview}}</span>
        <span>Duration: {{duration}}</span>
        <span>
          <i class="fa fa-star" aria-hidden="true" style="color:gold"></i>
          {{single.vote_average}}
        </span>
        <button>
          <i class="fa fa-play" aria-hidden="true"></i> WATCH
        </button>
        <button>
          <i class="fa fa-plus" aria-hidden="true"></i> ADD TO LIST
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Trailer from "@/components/Trailer";
export default {
  name: "OtherHead",
  components: {
    Trailer,
  },
  created: function () {
    this.$store.dispatch("single", this.$route.params.id);
    this.$store.dispatch("similar", this.$route.params.id);
  },
  data() {
    return {
      isHovering: false,
      show: true,
    };
  },
  methods: {
    getVideo() {
      this.show = false;
      this.$store.dispatch("getVideo", { url: this.single.id, number: 3 });
    },
  },
  computed: {
    single() {
      return this.$store.state.single || false;
    },
    similar() {
      return this.$store.getters.similar || false;
    },
    duration() {
      const x = this.single.runtime;
      return Math.floor(x / 60) + "h : " + (x % 60) + "m";
    },
    video3() {
      const x = this.$store.state.video_url3;
      return x ? `http://www.youtube.com/embed/${x}?autoplay=1` : false;
    },
  },
  watch: {
    $route() {
      this.$store.dispatch("single", this.$route.params.id);
      this.$store.dispatch("similar", this.$route.params.id);
    },
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
