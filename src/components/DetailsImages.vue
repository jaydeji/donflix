<template>
  <div class="images">
    <img v-for="(image) in images" :key="image" :src="image" alt />
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const images = computed(() => store.state.images ?? false);
    return { images };
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