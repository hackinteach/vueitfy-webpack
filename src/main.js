import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'; // Ensure you are using css-loader
import '@fortawesome/fontawesome-free/css/all.css'; // Ensure you are using css-loader
import App from './App.vue';
import router from './router';

Vue.use(Vuetify, {
  iconfont: 'fa',
});

Vue.mixin({});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
