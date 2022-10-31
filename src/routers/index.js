import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/login",
    name: "login",
    component: () => import("@/pages/login/index.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/pages/home/index.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/pages/about/index.vue"),
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/pages/no-found/index.vue"),
  },
  {
    path: "/:w+",
    name: "*",
    redirect: "/404",
  },
];

export const routers = createRouter({
  history: createWebHashHistory(),
  routes,
});
