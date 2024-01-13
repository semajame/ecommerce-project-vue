<template>
  <header
    class="flex justify-between items-center px-7 py-[1.5rem] fixed top-0 left-0 right-0 bg-white"
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
    <div>
      <router-link
        :to="items.path"
        class="font-md text-[1.1rem] px-3 font-medium tracking-tighter text-[#222]"
        v-for="items in links"
        :key="items"
      >
        {{ items.name }}
      </router-link>
    </div>
    <div class="flex gap-6">
      <button @click="console.log('search clicked')">
        <img
          src="https://assets-global.website-files.com/645a69e5ff9a553155774bec/645bd3ee8488ed1f04f9a0c9_search.svg"
          alt="Search Image"
          loading="lazy"
        />
      </button>
      <button @click="console.log('cart clicked')" class="relative">
        <img
          src="https://assets-global.website-files.com/645a69e5ff9a553155774bec/645bd3ee750e2bc9b41edaba_shop.svg"
          alt="Cart Image"
          loading="lazy"
        />
        <!-- <span
          class="absolute bg-[#b94e31] text-white font-bold p-1 text-sm rounded-full text-[0.9rem] top-0 z-1 right-0 text-center"
        >
          0
        </span> -->
      </button>
    </div>
  </header>
</template>

<script setup>
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
