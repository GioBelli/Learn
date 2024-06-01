import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Page from "../views/Page.vue";
import NotFound from "../views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/home",
      redirect: "/",
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/framework/:id",
      name: "framework",
      component: Page,
    },
    {
      path: "/:catchall(.*)*",
      name: "",
      component: NotFound,
    },
  ],
});

export default router;
