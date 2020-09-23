<template>
  <div class="wrapper">
    <router-link :key="$route.fullPath" :to="'/detail/' + data.id.toString()">
      <div class="cd" :style="{ backgroundImage: data.url }"></div>
    </router-link>
    <span class="title">{{ data.title }}</span>
    <div style="display:flex;justify-content:space-between">
      <span class="year">{{ data.year }}</span>
      <span style="width:60%;display:flex;justify-content:space-between">
        <i @click="click" class="fa fa-eye" style="cursor:pointer" aria-hidden="true"></i>
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
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "Card",
  props: ["data"],
  emits: ["click"],
  setup(props, { emit }) {
    const store = useStore();
    const handleClick = () => {
      store.commit("LIST", props.data);
    };
    const click = () => emit("click");
    const color = computed(() => {
      const x = store.state.list?.find((e) => e.id === props.data.id);
      return x ? "red" : "white";
    });

    return { color, handleClick, click };
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
