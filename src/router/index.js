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
      meta: {
        title: "Home - Greenery Ecommerce",
        description:
          "Welcome to Greenery Ecommerce, your go-to shop for plants.",
      },
    },
    {
      path: "/shop",
      name: "Shop",
      component: Shop,
      meta: {
        title: "Shop - Greenery Ecommerce",
        description:
          "Explore the shop page, where plants are displayed with their names and prices.",
      },
    },
    {
      path: "/contacts",
      name: "Contacts",
      component: Contacts,
      meta: {
        title: "Contacts - Greenery Ecommerce",
        description:
          "Visit the contacts page to see our opening hours and fill out the contact form.",
      },
    },
    {
      path: "/cart",
      name: "Cart",
      component: Cart,
      meta: {
        title: "Cart - Greenery Ecommerce",
        description:
          "View your cart with added plants, total prices, quantities, and shipping information.",
      },
    },
    {
      path: "/shop/:name",
      name: "ProductDetail",
      component: ProductDetail,
      meta: {
        title: (route) => `${route.params.name} - Greenery Ecommerce`,
        description:
          "Explore detailed information about the selected plant, including its name and features.",
      },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
      meta: {
        title: "404 - Page Not Found",
        description: "The page you are looking for does not exist.",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  // Set the document title
  const title =
    typeof to.meta.title === "function" ? to.meta.title(to) : to.meta.title;
  document.title = title || "Greenery - Ecommerce Plant Website";

  // Set the meta description
  const description = to.meta.description || "Default meta description.";
  let metaDescription = document.querySelector("meta[name='description']");
  if (!metaDescription) {
    metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    document.head.appendChild(metaDescription);
  }
  metaDescription.content = description;

  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: "smooth" });

  next();
});

export default router;
