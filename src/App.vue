<template>
  <div>
    <Head></Head>
    <Body />
  </div>
</template>

<script>
import Head from "./components/Head.vue";
import Body from "./components/Body.vue";
import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers["Authorization"] = `Bearer ${process.env.VUE_APP_KEY}`;

export default {
  name: "App",
  components: {
    Head,
    Body
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;900&display=swap");

* {
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: "Montserrat", sans-serif;
  background-color: black;
  color: white;
}
</style>
