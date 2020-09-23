import { createApp } from 'vue';
import App from './App.vue';
import Home from './pages/Home';
import Detail from './pages/Other';
import Search from './pages/Search';
import List from './pages/List';
import { createStore } from 'vuex';
import vueStore from './store/';
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
