<template>
  <div class="wrapper">
    <router-link :key="$route.fullPath" :to="'/detail/' + data.id.toString()">
      <div class="cd" :style="{ backgroundImage: data.url }"></div>
    </router-link>
    <span class="title">{{ data.title }}</span>
    <div style="display:flex;justify-content:space-between">
      <span class="year">{{ data.year }}</span>
      <span style="width:60%;display:flex;justify-content:space-between">
        <i @click="$emit('click')" class="fa fa-eye" style="cursor:pointer" aria-hidden="true"></i>
        <i
          class="fa fa-heart"
          @click="handleClick"
          :style="'color:'+color+';cursor:pointer'"
          aria-hidden="true"
        ></i>
        <i class="fa fa-star" aria-hidden="true" style="color:gold"></i>
        <span style="color:yellow">{{ data.rating }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["data"],
  methods: {
    handleClick() {
      this.$store.commit("LIST", this.data);
    },
  },
  computed: {
    color() {
      const x = this.$store.state.list?.find((e) => e.id === this.data.id);
      return x ? "red" : "white";
    },
  },
};
</script>

<style scoped>
.wrapper {
  width: 200px;
  margin-right: 10px;
  margin-bottom: 20px;
}
.cd {
  height: 300px;
  width: 200px;
  background-size: cover;
}
.title {
  text-overflow: ellipsis;
  display: block;
  margin-bottom: 5px;
  font-size: 1.2rem;
}
.fa-eye,
.year {
  opacity: 0.7;
}
</style>
