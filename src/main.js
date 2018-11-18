import Vue from 'vue'
import App from './App.vue'
import router from './router'
import tiplijst from './assets/tiplijst';

Vue.config.productionTip = false
Vue.prototype.$tiplijst = tiplijst

router.beforeEach((to, from, next) => {
  const id = to.params.id;
  if (tiplijst[id]){
    document.title = `taaltip: ${tiplijst[id].title} | taalhulp123.nl`;
  }
  next();
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
