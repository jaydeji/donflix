<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios';
// import Home from './pages/Home';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers['Authorization'] = `Bearer ${process.env.VUE_APP_KEY}`;

export default {
  name: 'App',
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;900&display=swap');

* {
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat', sans-serif;
  background-color: black;
  color: white;
}

a {
  color: unset;
  text-decoration: unset;
}
</style>
