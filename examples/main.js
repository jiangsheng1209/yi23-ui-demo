import Vue from "vue";
import App from "./App.vue";

// 导入Ui
import XrUI from '../packages';
// 注册组件
Vue.use(XrUI)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
