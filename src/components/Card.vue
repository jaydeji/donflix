<template>
  <div class="wrapper">
    <router-link :key="$route.fullPath" :to="'/detail/' + data.id.toString()">
      <div class="cd" :style="{ backgroundImage: data.url }"></div>
    </router-link>
    <span class="title">{{ data.title }}</span>
    <div>
      <span>{{ data.year }}</span>
      <span>
        <i @click="$emit('click')" class="fa fa-eye" style="cursor:pointer" aria-hidden="true"></i>
        <i
          class="fa fa-heart"
          @click="handleClick"
          :style="'color:'+color+';cursor:pointer'"
          aria-hidden="true"
        ></i>
        <i class="fa fa-star" aria-hidden="true" style="color:gold"></i>
        {{ data.rating }}
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
}
.cd {
  height: 300px;
  width: 200px;
  background-size: cover;
}
.title {
  text-overflow: ellipsis;
}
</style>
