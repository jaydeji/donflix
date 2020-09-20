<template>
  <div class="detail">
    <span class="mb-2">Duration: {{duration}}</span>
    <span class="mb-2">
      <i class="fa fa-star" aria-hidden="true" style="color:gold"></i>
      {{detail.vote_average}}
    </span>
    <span class="mb-2">{{detail.original_title}}</span>
    <span class="mb-2">{{detail.overview}}</span>
    <div>
      <button class="watch">
        <i class="fa fa-play" aria-hidden="true"></i> WATCH
      </button>
      <button class="add" @click="handleClick">
        <i class="fa fa-plus" aria-hidden="true"></i>
        {{!exists?'ADD TO':'REMOVE FROM'}} LIST
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Details",
  props: ["detail"],
  methods: {
    handleClick() {
      const e = this.detail;
      this.$store.commit("LIST", {
        ...this.detail,
        url: `url(https://image.tmdb.org/t/p/original${e.poster_path})`,
        title: e.original_title,
        year: e?.release_date.slice(0, 4),
        rating: e.vote_average,
        id: e.id,
      });
    },
  },
  computed: {
    duration() {
      const x = this.detail.runtime;
      return Math.floor(x / 60) + "h : " + (x % 60) + "m";
    },
    exists() {
      const x = this.$store.state.list?.find((e) => e.id === this.detail.id);
      return x;
    },
  },
};
</script>

<style scoped lang="scss">
.detail {
  opacity: 0.9;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  z-index: 2;
  display: flex;
  flex-direction: column;
  margin-left: 70px;
  margin-right: 70px;
}
</style>
<style >
.watch {
  background-color: red;
  color: white;
  padding: 10px 20px;
  border-radius: 20px;
  margin-right: 20px;
  cursor: pointer;
}
.add {
  color: white;
  background-color: black;
  padding: 10px 20px;
  border-radius: 20px;
  margin-right: 20px;
  cursor: pointer;
}
.mb-1 {
  margin-bottom: 10px;
}
.mb-2 {
  margin-bottom: 20px;
}
</style>