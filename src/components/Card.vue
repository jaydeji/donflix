<template>
  <div class="wrapper">
    <div class="cd" :style="{backgroundImage:data.url}"></div>
    <span class="title">{{data.title}}</span>
    <div>
      <span>{{data.year}}</span>
      <span>
        <i @click="$emit('click')" class="fa fa-eye" aria-hidden="true"></i>
        <i class="fa fa-heart" style="color:red" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true" style="color:gold"></i>
        {{data.rating}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["data"]
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