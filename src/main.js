import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Antd import
import { Breadcrumb } from "ant-design-vue";
import { DatePicker } from "ant-design-vue";
import { Layout } from "ant-design-vue";
import { Menu } from "ant-design-vue";

Vue.config.productionTip = false;

// Antd use
Vue.use(Breadcrumb);
Vue.use(DatePicker);
Vue.use(Layout);
Vue.use(Menu);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
