import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Shop from "../views/Shop.vue";
import Contacts from "../views/Contacts.vue";
import Cart from "../views/Cart.vue";
import NotFound from "../views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/shop",
      name: "Shop",
      component: Shop,
    },
    {
      path: "/contacts",
      name: "Contacts",
      component: Contacts,
    },
    {
      path: "/cart",
      name: "Cart",
      component: Cart,
    }
  ],
});

router.beforeEach((to, from, next) => {
  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: "smooth" });
  next();
});

export default router;
