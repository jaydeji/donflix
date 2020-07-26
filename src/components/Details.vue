<template>
  <div class="detail">
    <span>Duration: {{duration}}</span>
    <span>
      <i class="fa fa-star" aria-hidden="true" style="color:gold"></i>
      {{detail.vote_average}}
    </span>
    <span>{{detail.original_title}}</span>
    <span>{{detail.overview}}</span>
    <div>
      <button>
        <i class="fa fa-play" aria-hidden="true"></i> WATCH
      </button>
      <button>
        <i class="fa fa-plus" aria-hidden="true"></i> ADD TO LIST
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Details",
  props: ["detail"],
  computed: {
    duration() {
      const x = this.detail.runtime;
      return Math.floor(x / 60) + "h : " + (x % 60) + "m";
    }
  }
};
</script>

<style scoped lang="scss">
.detail {
  position: absolute;
  top: 50%;
  color: white;
  z-index: 2;
  display: flex;
  flex-direction: column;
}
</style>