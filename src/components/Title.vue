<template>
  <div>
    <span>
      <i class="fa fa-line-chart" aria-hidden="true"></i>
      {{title}}
    </span>

    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: ["title"]
};
</script>

<style scoped>
.line {
  height: 0.5px;
  color: white;
  width: 90%;
}
</style>