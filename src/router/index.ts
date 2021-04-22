import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/home.vue";
import Page1 from "../views/page1.vue";
import Page2 from "../views/page2.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/page1",
    name: "page1",
    component: Page1,
  },
  {
    path: "/page2",
    name: "page2",
    component: Page2,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
