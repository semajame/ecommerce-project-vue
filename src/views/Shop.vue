<template>
  <main class="py-[5rem] px-[4rem]">
    <h1
      class="text-[4.3rem] tracking-tight font-medium py-[5rem] max-w-[800px] text-[#222]"
    >
      Explore our green world
    </h1>

    <section class="flex gap-[2rem] mb-[4rem]">
      <button
        v-for="button in buttons"
        :key="button.category"
        class="text-[1.3rem] pointer border-none tracking-[-0.1rem] font-medium text-[#222]"
        :data-name="button.buttonName"
      >
        {{ button.buttonName }}
      </button>
    </section>

    <section>
      <div
        class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 place-items-center"
      >
        <div
          class="max-w-[350px]"
          :data-category="items.category"
          v-for="items in plants"
          :key="items.id"
        >
          <div class="w-full">
            <img
              :src="items.image"
              loading="lazy"
              alt="Product Name"
              class="w-full object-cover rounded h-[437px]"
            />
          </div>
          <div class="m-[1rem]">
            <div class="flex justify-between items-center">
              <h3
                class="text-[1.5rem] font-medium text-black tracking-[-0.1rem]"
              >
                {{ items.name }}
              </h3>
              <button class="product__arrow__button">
                <img
                  src="https://assets.website-files.com/64ed01cfd959df99c0368448/64ef122c8a3b67f03dbd9175_arrow-down-right.svg"
                  loading="lazy"
                  alt="Arrow Image"
                  class="arrow__image"
                />
              </button>
            </div>
            <span class="text-[1.2rem] text-[#787878]">
              {{ items.price }}
            </span>
            <div class="my-[1rem] flex justify-between items-center">
              <input
                type="text"
                value="1"
                class="p-2 max-w-[80px] border border-light-gray rounded-md outline-none focus:border border-solid focus:border-black"
                @input="onlyNumber"
              />

              <button
                class="bg-transparent pb-2 border-b border-solid border-black cursor-pointer font-medium hover:text-[#787878] text-lg"
                @click="addToCart(items)"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed } from "vue";

const selectedCategory = ref("All");
const buttons = [
  {
    category: "All",
    buttonName: "All",
  },
  {
    category: "Flowering Plants",
    buttonName: "Flowering Plants",
  },
  {
    category: "Succulents",
    buttonName: "Succulents",
  },
  {
    category: "Air Purifiers",
    buttonName: "Air Purifiers",
  },
  {
    category: "Low-Maintenance",
    buttonName: "Low-Maintenance",
  },
  {
    category: "Indoor Foliage",
    buttonName: "Indoor Foliage",
  },
];

const plants = [
  {
    image:
      "https://assets.website-files.com/64ed01d0d959df99c03684cc/64ef1e641d50ae58a7cccc98_feey-dTLeHGu9FAw-unsplash.jpg",
    name: "Jesse",
    price: "$ 18.00 USD",
    id: "1",
    category: ["Flowering Plants", "Low Maintenance"],
  },
  {
    image:
      "https://assets.website-files.com/64ed01d0d959df99c03684cc/64ef1d726de45ea0e0551508_feey-8nONCr6eTeg-unsplash.jpg",
    name: "Winson",
    price: "$ 24.00 USD",
    id: "2",
    category: ["Succulents", "Low-Maintenance"],
  },
  {
    image:
      "https://assets.website-files.com/64ed01d0d959df99c03684cc/64ef1cfc570c8023bd5b3e05_feey-shAA_rxG2Yc-unsplash.jpg",
    name: "Venus",
    price: "$ 30.00 USD",
    id: "3",
    category: ["Flowering Plants", "Succulents"],
  },
  {
    image:
      "https://assets.website-files.com/64ed01d0d959df99c03684cc/64ef0d32c3b6732ca16db980_feey-bwsTJMnhcwE-unsplash.jpg",
    name: "Lineo",
    price: "$ 18.00 USD",
    id: "4",
    category: ["Flowering Plants", "Air Purifiers", "Indoor Foliage"],
  },
  {
    image:
      "https://assets.website-files.com/64ed01d0d959df99c03684cc/64ef0ce17576e9baae98663f_feey-eeOOH0dk3XQ-unsplash.jpg",
    name: "Mark",
    price: "$ 30.00 USD",
    id: "5",
    category: ["Succulents", "Air Purifiers", "Indoor Foliage"],
  },
  {
    image:
      "https://assets.website-files.com/64ed01d0d959df99c03684cc/64ef0cc296e00eaf5ca2cab8_feey-cLaaxa4DSnc-unsplash.jpg",
    name: "Fushion",
    price: "$ 24.00 USD",
    id: "6",
    category: ["Low-Maintenance", "Indoor Foliage"],
  },
  {
    image:
      "https://assets.website-files.com/64ed01d0d959df99c03684cc/64ef0c921b293c2901ab0265_feey-dAA2Q_eFb84-unsplash.jpg",
    name: "Lucky",
    price: "$ 18.00 USD",
    id: "7",
    category: ["Air Purifiers"],
  },
];

// const filteredPlants = computed(() => {
//   if (selectedCategory.value === "All") {
//     return plants.value;
//   } else {
//     return plants.value.filter((item) =>
//       item.category.includes(selectedCategory.value)
//     );
//   }
// });
</script>

<style></style>
