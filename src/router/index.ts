import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "../pages/HomeView.vue"),
  },
  {
    path: "/album/:id",
    name: "album",
    component: () => import(/* webpackChunkName: "album" */ "../pages/AlbumView.vue"),
  },
  {
    path: "/topic/:id",
    name: "topic",
    component: () => import(/* webpackChunkName: "topic" */ "../pages/TopicView.vue"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import(/* webpackChunkName: "topic" */ "../pages/SearchView.vue"),
  },
  {
    path: "/playlist/:id",
    name: "playlist",
    component: () => import(/* webpackChunkName: "topic" */ "../pages/PlaylistView.vue"),
  }
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
