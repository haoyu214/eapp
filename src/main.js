// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store'
import resource from 'vue-resource';
import './common/stylus/index.styl'

Vue.use(resource);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  data :{
    eventHub: new Vue()
  },
  template: '<App/>',
  components: { App }
});
