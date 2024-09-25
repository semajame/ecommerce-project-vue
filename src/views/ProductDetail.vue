<template>
  <div class="my-[10rem]">
    <!-- Display single item details -->
    <div v-if="item" :key="item.id" class="m-auto px-20 max-md:px-10">
      <div class="flex gap-10 justify-center max-md:flex-col">
        <div class="w-[45%] max-md:w-full">
          <img
            :src="item.image"
            loading="lazy"
            alt="Product Name"
            class="w-full object-cover h-[50%] rounded"
          />
        </div>
        <div class="w-[55%] max-md:w-full">
          <div class="flex flex-col gap-5">
            <h2 class="text-7xl tracking-tighter font-medium text-slate-900">
              {{ item.name }}
            </h2>
            <span class="text-xl text-[#558d4e] font-medium tracking-tight">
              {{ item.category.join(", ") }}
            </span>
            <p class="text-lg tracking-tight text-gray-600">
              {{ item.paragraph }}
            </p>
          </div>
          <div>
            <div class="my-10">
              <p class="text-2xl font-medium text-gray-500 tracking-tight">
                Price:
              </p>
              <p class="my-5 text-2xl">$ {{ item.price.toFixed(2) }} USD</p>

              <button
                class="mt-5 bg-[#222] p-5 rounded-lg text-white font-medium text-lg hover:bg-[#558d4e]"
                @click="addToCart(item)"
              >
                Add to Cart
              </button>
            </div>
          </div>
          <div class="mt-[4rem] tracking-tight text-slate-900">
            <h2 class="text-4xl font-medium">Details</h2>

            <!-- Render details with <br> between array elements -->
            <p
              class="text-lg tracking-tight text-gray-600 my-5"
              v-html="item.details.join('<br> <br>')"
            ></p>
          </div>
        </div>
      </div>
    </div>

    <!-- Show a message if the item is not found -->
    <div v-else>
      <p>Product not found.</p>
    </div>
  </div>

  <Explore />
</template>

<script setup>
import Explore from "@/components/Explore.vue";
import { onMounted, ref, computed } from "vue";
import { useRoute } from "vue-router";
import { cart, addToCart } from "@/components/addToCart";

const route = useRoute(); // Get the current route
const productName = route.params.name; // Extract the 'name' from the route params
const item = ref(null); // Initialize item as null

// Assuming 'plants' is passed as a prop
const props = defineProps({
  plants: {
    type: Array,
    required: true,
  },
});

// On component mount, find the specific item by its name
onMounted(() => {
  // Find the product that matches the current product name
  item.value = props.plants.find((product) => product.name === productName);

  console.log(item.value);
});
</script>
