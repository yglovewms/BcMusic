import Vue from 'vue'
import App from './App'
import router from './router'
//注释的不要管，是我写的要用的
// import ElementUi from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css';
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';
//
//
// Vue.use(IconsPlugin)
// Vue.use(BootstrapVue)
// Vue.use(ElementUi);
// Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
