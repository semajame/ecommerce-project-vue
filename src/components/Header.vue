<template>
  <header
    class="flex justify-between items-center px-7 py-[1.5rem] fixed top-0 left-0 right-0 bg-white z-10 shadow-md"
  >
    <div>
      <router-link to="/">
        <img
          src="https://assets.website-files.com/64ed01cfd959df99c0368448/64f0511f8895504cb56aef87_The%20Greenery%20(2).svg"
          alt="Logo Image"
          class="w-[150px] logo"
        />
      </router-link>
    </div>

    <nav class="hidden box-shadow">
      <ul
        class="max-md:bg-white max-md:absolute max-md:top-0 max-md:right-0 max-md:bottom-0 max-md:z-10 max-md:h-[100vh] max-md:left-[40%] max-md:shadow-md max-sm:bg-white max-sm:absolute max-sm:top-0 max-sm:right-0 max-sm:bottom-0 max-sm:z-10 max-sm:h-[100vh] max-sm:left-[40%] max-sm:shadow-md"
      >
        <button
          class="hidden max-sm:block max-md:block max-md:float-right max-md:p-[2rem] max-sm:float-right max-sm:p-[2rem]"
          @click="closeNav"
        >
          <img
            src="https://assets-global.website-files.com/64ed01cfd959df99c0368448/64ed01d0d959df99c0368597_close-btn.svg"
            alt="Close Menu"
          />
        </button>
        <li class="pt-[5rem] text-right">
          <router-link
            :to="items.path"
            class="font-md text-[1.5rem] px-3 font-medium tracking-tighter text-[#222] flex flex-col py-[1rem] pr-[1rem]"
            v-for="items in links"
            :key="items"
            @click="closeNavLink"
          >
            {{ items.name }}
          </router-link>
        </li>
      </ul>
    </nav>

    <nav class="flex gap-2 items-center relative">
      <ul class="max-md:hidden">
        <li>
          <router-link
            :to="items.path"
            class="font-md text-[1.1rem] px-3 font-medium tracking-tighter text-[#222]"
            v-for="items in links"
            :key="items"
          >
            {{ items.name }}
          </router-link>
        </li>
      </ul>
      <router-link to="/cart" class="relative">
        <img
          src="https://assets-global.website-files.com/645a69e5ff9a553155774bec/645bd3ee750e2bc9b41edaba_shop.svg"
          alt="Cart Image"
          loading="lazy"
        />

        <span
          class="absolute bg-green-500 text-white font-medium p-1 text-[0.9rem] rounded-full z-1 left-3 bottom-0 text-center h-[22px] w-[22px] flex justify-center items-center"
          v-if="cart.length > 0"
        >
          {{ cartQuantity }}
        </span>
      </router-link>
      <button class="hidden max-sm:block max-md:block" @click="openNav">
        <img
          src="https://assets-global.website-files.com/64ed01cfd959df99c0368448/64ed01d0d959df99c0368596_menu-btn.svg"
          alt="Menu"
        />
      </button>
    </nav>
  </header>
</template>

<script setup>
import { computed } from "vue";
import { cart } from "@/components/addToCart";

const cartQuantity = computed(() => {
  return cart.value.length;
});

const toggleNav = (open) => {
  const ul = document.querySelector("nav");
  ul.classList.toggle("max-sm:block", open);
  ul.classList.toggle("max-sm:hidden", !open);
  ul.classList.toggle("max-md:block", open);
  ul.classList.toggle("max-md:hidden", !open);
};

const closeNavLink = () => {
  toggleNav(false);
};

const openNav = () => {
  toggleNav(true);
};

const closeNav = () => {
  toggleNav(false);
};

const links = [
  {
    path: "/",
    name: "Home",
    component: "Home",
  },

  {
    path: "/shop",
    name: "Shop",
    component: "Shop",
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: "Contacts",
  },
];
</script>

<style></style>
