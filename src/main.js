import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';
import vueStore from './store/';

Vue.config.productionTip = false;

Vue.use(Vuex);

export const store = new Vuex.Store(vueStore);

new Vue({
  render: (h) => h(App),
  store,
}).$mount('#app');
