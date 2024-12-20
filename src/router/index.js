import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Shop from "../views/Shop.vue";
import Contacts from "../views/Contacts.vue";
import Cart from "../views/Cart.vue";
import NotFound from "../views/NotFound.vue";
import ProductDetail from "../views/ProductDetail.vue";

const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/shop",
      name: "Shop",
      component: Shop,
      meta: { title: "Shop - Greenery Ecommerce" },
    },
    {
      path: "/contacts",
      name: "Contacts",
      component: Contacts,
      meta: { title: "Contacts - Greenery Ecommerce" },
    },
    {
      path: "/cart",
      name: "Cart",
      component: Cart,
      meta: { title: "Cart - Greenery Ecommerce" },
    },
    {
      path: "/shop/:name",
      name: "ProductDetail",
      component: ProductDetail,
      meta: { title: (route) => `${route.params.name} - Greenery Ecommerce` },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

router.beforeEach((to, from, next) => {
  // Scroll to the top of the page
  const title =
    typeof to.meta.title === "function" ? to.meta.title(to) : to.meta.title;
  document.title = title || "Greenery - Ecommerce Plant Website";
  window.scrollTo({ top: 0, behavior: "smooth" });
  next();
});

export default router;
