import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "@/views/Index.vue"),
  },
  {
    path: "/detalhes/:id",
    name: "Details",
    component: () =>
      import(/* webpackChunkName: "details" */ "@/views/Details.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
