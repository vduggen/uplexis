import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

Vue.filter("formatCurrency", function (value) {
  if (!value) return "";
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
});

Vue.filter("getValue", function (value) {
  if (!value) return "";
  return value.split("R$")[1];
});

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
