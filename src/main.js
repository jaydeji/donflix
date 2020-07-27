import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';
import vueStore from './store/';
import VueRouter from 'vue-router';

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(VueRouter);

export const store = new Vuex.Store(vueStore);

const routes = [{ path: '/', component: App }];
const router = new VueRouter({
  routes,
});

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount('#app');
