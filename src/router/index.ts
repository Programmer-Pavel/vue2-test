import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import PostsView from "../views/PostsView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "posts",
    component: PostsView,
  },
  {
    path: "/form",
    name: "form",

    component: () => import("../views/FormView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
