import Vue from 'vue';
import App from './App.vue';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  /** Adding Vuex in Project */
  store,
  render: h => h(App),
}).$mount('#app');
