<template>
  <main class="py-[5rem] px-[4rem] max-md:px-[1rem] max-sm:px-[1rem]">
    <h1
      class="header1 tracking-tight font-semibold pt-[5rem] max-w-[800px] text-[#222] max-md:max-w-[none] max-sm:max-w-[none]"
    >
      Explore our green world
    </h1>
  </main>
  <section
    class="max-md:grid max-md:grid-cols-1 max-md:sm:grid-cols-1 max-md:md:grid-cols-2 max-md:xl:grid-cols-3 flex gap-[2rem] max-md:gap-[1rem] pb-[5rem] px-[5rem] max-md:px-[1rem] max-sm:px-[1rem]"
  >
    <button
      v-for="button in buttons"
      :key="button.category"
      class="text-[1.3rem] pointer border-none tracking-[-0.1rem] font-medium text-[#222]"
      @click="selectCategory(button.category)"
    >
      {{ button.buttonName }}
    </button>
  </section>

  <section class="px-[4rem] pb-[4rem] max-md:px-[1rem] max-sm:px-[1rem]">
    <div
      class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-9 max-md:place-items-center max-sm:place-items-center"
    >
      <div v-for="item in filteredPlants" :key="item.id" class="max-w-[450px]">
        <router-link
          :to="{ name: 'ProductDetail', params: { name: item.name } }"
        >
          <div class="w-full overflow-hidden">
            <img
              :src="item.image"
              loading="lazy"
              alt="Product Name"
              class="w-full object-cover rounded h-[450px] transform transition-transform ease-in-out hover:scale-110"
            />
          </div>
          <div class="m-[1rem]">
            <div class="flex justify-between items-center">
              <h3
                class="text-[1.5rem] font-medium text-black tracking-[-0.1rem]"
              >
                {{ item.name }}
              </h3>
              <button>
                <img
                  src="https://assets.website-files.com/64ed01cfd959df99c0368448/64ef122c8a3b67f03dbd9175_arrow-down-right.svg"
                  loading="lazy"
                  alt="Arrow Image"
                  class="pointer"
                />
              </button>
            </div>
            <span class="text-[1.2rem] text-[#787878]">
              ${{ item.price.value.toFixed(2) }} USD
            </span>
          </div>
        </router-link>
        <button
          class="bg-transparent pb-2 ml-4 border-b border-solid border-black cursor-pointer font-medium hover:text-[#787878] text-lg"
          @click="addToCart(item)"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

import { addToCart, cart } from "@/components/addToCart";

const selectedCategory = ref("All");

const buttons = [
  { category: "All", buttonName: "All" },
  {
    category: "Flowering Plants",
    buttonName: "Flowering Plants",
  },
  { category: "Succulents", buttonName: "Succulents" },
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

// PROPS
const props = defineProps({
  plants: {
    type: Array,
    required: true,
  },
});

// FILTER PLANTS
const filteredPlants = computed(() => {
  if (selectedCategory.value === "All") {
    return props.plants;
  } else {
    return props.plants.filter((item) =>
      item.category.includes(selectedCategory.value)
    );
  }
});

// BUTTON CATEGORY
const selectCategory = (category) => {
  selectedCategory.value = category;
};
</script>
