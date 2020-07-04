<template>
  <Head></Head>
</template>

<script>
import Head from './components/Head.vue';
import axios from 'axios';

axios.defaults.baseURL = 'https://developers.themoviedb.org/4/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers[
  'Authorization'
] = `Bearer ${process.env.VUE_APP_API_KEY}`;

export default {
  name: 'App',
  components: {
    Head,
  },
};
</script>

<style></style>
