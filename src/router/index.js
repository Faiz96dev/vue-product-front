import { createWebHistory, createRouter } from "vue-router";
const routes = [
  {
    path: "/",
    name: "Product",
    component: () => import("../view/ProductsView.vue"),
  },
  {
    path: "/products_view",
    name: "Product",
    component: () => import("../view/ProductsView.vue"),
  },
  {
    path: "/about",
    name: "AboutPage",
    component: () => import("../view/AboutPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;