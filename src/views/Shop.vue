<template>
  <main class="py-[5rem] px-[4rem]" v-motion-slide-visible-bottom>
    <h1
      class="header1 tracking-tight font-semibold pt-[5rem] max-w-[800px] text-[#222] max-md:max-w-[none] max-sm:max-w-[none]"
    >
      Explore our green world
    </h1>
  </main>
  <section
    class="flex gap-[2rem] pb-[5rem] px-[5rem]"
    v-motion-slide-visible-bottom
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

  <section class="px-[4rem] pb-[4rem]">
    <div
      class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-9 max-md:place-items-center max-sm:place-items-center"
    >
      <div v-for="item in filteredPlants" :key="item.id" class="max-w-[450px]">
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
            <h3 class="text-[1.5rem] font-medium text-black tracking-[-0.1rem]">
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
          <div class="my-[1rem] flex justify-between items-center">
            <!-- <select
              name=""
              id=""
              v-model="quantity"
              class="p-2 w-[80px] border border-light-gray rounded-md outline-none focus:border border-solid focus:border-black bg-transparent"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select> -->

            <button
              class="bg-transparent pb-2 border-b border-solid border-black cursor-pointer font-medium hover:text-[#787878] text-lg"
              @click="addToCart(item)"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script setup>
import Footer from "@/components/Footer.vue";
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
