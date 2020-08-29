<template>
  <div class="images">
    <img v-for="(image) in images" :key="image" :src="image" alt />
  </div>
</template>

<script>
export default {
  computed: {
    images() {
      return this.$store.state.images ?? false;
    },
  },
};
</script>

<style scoped>
.images {
  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-template-rows: repeat(2, 250px);
  justify-content: space-between;
  padding: 30px;
}
img {
  width: 100%;
}
</style>