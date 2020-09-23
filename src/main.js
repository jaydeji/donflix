import { createApp } from 'vue';
import App from './App.vue';
import Home from './pages/Home';
import Detail from './pages/Other';
import Search from './pages/Search';
import List from './pages/List';
import Vuex from 'vuex';
import vueStore from './store/';
import VueRouter from 'vue-router';

export const store = new Vuex.Store(vueStore);

const routes = [
  {
    path: '/',
    component: App,
    children: [
      { path: '/', component: Home },
      { path: 'detail/:id', component: Detail },
      { path: '/search', component: Search },
      { path: '/favourites', component: List },
    ],
  },
];
const router = new VueRouter({
  mode: 'history',
  routes,
});

createApp(App).use(router).use(store).mount('#app');
