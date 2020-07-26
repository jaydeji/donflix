<template >
  <div class="frame">
    <div v-if="youtube">
      <i @click="$emit('trailer-close')" class="fa fa-times" aria-hidden="true"></i>
      <iframe :src="youtube" width="85%" height="400px" frameborder="0" allowfullscreen></iframe>
    </div>
    <div v-else class="load"></div>
  </div>
</template>

<script>
export default {
  name: "Trailer",
  props: ["youtube"]
  // watch: {
  //   id: function() {
  //     this.$store.dispatch("getVideo", this.id);
  //   }
  // },
  // computed: {
  //   vid() {
  //     return this.youtube || false;
  //   }
  // }
};
</script>

<style scoped>
.frame {
  display: flex;
  justify-content: center;
  position: relative;
}
.load {
  background-color: white;
}
i {
  position: absolute;
  right: 10px;
  top: 10px;
}
</style>