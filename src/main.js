import Vue from 'vue';
import App from './App.vue';
import Home from './pages/Home';
import Detail from './pages/Other';
import Vuex from 'vuex';
import vueStore from './store/';
import VueRouter from 'vue-router';

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(VueRouter);

export const store = new Vuex.Store(vueStore);

const routes = [
  {
    path: '',
    component: App,
    children: [
      { path: '', component: Home },
      { path: 'detail/:id', component: Detail, name: 'Movie Details' },
    ],
  },
];
const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount('#app');
