import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import { store } from './store';
import {vuetify} from './plugins/vuetify';

Vue.config.productionTip = false;
Vue.use(Vuelidate);

new Vue({
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
