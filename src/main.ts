import { createApp } from 'vue';
import App from './App.vue';
import Home from './pages/Home.vue';
import Detail from './pages/Other.vue';
import Search from './pages/Search.vue';
import List from './pages/List.vue';
import { createStore } from 'vuex';
import vueStore from './store/index';
import { createRouter, createWebHistory } from 'vue-router';

export const store = createStore(vueStore);

const routes = [
  {
    path: '/',
    component: App,
    children: [
      { path: '/', component: Home },
      { path: 'detail/:id', component: Detail, props: true },
      { path: '/search', component: Search },
      { path: '/favourites', component: List },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App)
  .use(store)
  .use(router)
  .mount('#app');
