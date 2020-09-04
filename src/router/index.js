import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("../views/Projects"),
  },
  {
    path: "/skills",
    name: "Skills",
    component: () => import("../views/Skills"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact"),
  },
  {
    path: "/extras",
    name: "Fun Stuffs",
    component: () => import("../views/Extras"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
