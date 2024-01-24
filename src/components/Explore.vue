<template>
  <section v-motion-slide-visible-bottom>
    <div
      class="flex justify-between p-[5rem] items-end max-sm:p-[2rem] max-md:p-[2rem]"
    >
      <h2
        class="header2 font-semibold tracking-tight text-[#222] max-w-[700px] max-md:max-w-[400px] max-sm:max-w-[200px]"
      >
        {{ shopHeader }}
      </h2>
      <router-link
        to="/shop"
        class="border-b border-solid border-black pb-2 block text-[#222] text-[1.2rem] font-medium tracking-tight hover:text-[#787878] ease-in-out transition hover:border-[#c7c4c4]"
        >View Products
      </router-link>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-9 px-[4rem] pb-[4rem] max-md:place-items-center max-md:px-[2rem]"
    >
      <div class="max-w-[450px]" v-for="item in plants" :key="item.id">
        <router-link to="/shop" class="decoration-none w-full">
          <div class="w-full overflow-hidden">
            <img
              :src="item.image"
              loading="lazy"
              alt="Product Name"
              class="w-full object-cover rounded h-[450px] transform transition-transform ease-in-out hover:scale-110"
            />
          </div>

          <div class="my-[1rem]">
            <div class="flex justify-between items-center">
              <h3 class="text-[1.5rem] font-medium text-black tracking-tight">
                {{ item.name }}
              </h3>

              <button class="bg-transparent border-none">
                <img
                  src="https://assets.website-files.com/64ed01cfd959df99c0368448/64ef122c8a3b67f03dbd9175_arrow-down-right.svg"
                  loading="lazy"
                  alt="Arrow Image"
                  class="pointer"
                />
              </button>
            </div>
            <span class="text-[1.2rem] text-[#787878]">{{ item.price }}</span>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const shopHeader = ref("Explore a world of green possibilities");
const plants = ref([
  {
    image:
      "https://assets.website-files.com/64ed01d0d959df99c03684cc/64ef1e641d50ae58a7cccc98_feey-dTLeHGu9FAw-unsplash.jpg",
    name: "Jesse",
    price: "$ 18.00 USD",
    id: "1",
  },
  {
    image:
      "https://assets.website-files.com/64ed01d0d959df99c03684cc/64ef1d726de45ea0e0551508_feey-8nONCr6eTeg-unsplash.jpg",
    name: "Winson",
    price: "$ 24.00 USD",
    id: "2",
  },
  {
    image:
      "https://assets.website-files.com/64ed01d0d959df99c03684cc/64ef1cfc570c8023bd5b3e05_feey-shAA_rxG2Yc-unsplash.jpg",
    name: "Venus",
    price: "$ 30.00 USD",
    id: "3",
  },
]);
</script>

<style></style>
