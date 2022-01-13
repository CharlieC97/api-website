import { createRouter, createWebHistory } from "vue-router";
import Books from "../views/Books.vue";
import Home from "../views/Home.vue";
import Imdb from "../views/Imdb.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/books",
    name: "Books",
    component: Books,
  },
  {
    path: "/imdb",
    name: "Imdb",
    component: Imdb,
  },
];

const router = createRouter({
  //   history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(),
  routes,
});

export default router;
