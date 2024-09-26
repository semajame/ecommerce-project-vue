<template>
  <div class="flex justify-around items-start relative pb-[5rem]">
    <main class="py-[7rem] px-[4rem] max-md:px-[2rem]">
      <div v-if="cart.length > 0" class="flex gap-[2rem] flex-col">
        <h1 class="text-[5rem] font-medium text-[#222]">Cart</h1>

        <div v-for="(item, index) in cart" :key="index" class="flex gap-[1rem]">
          <div>
            <img
              :src="item.productImage"
              alt="Product Image"
              class="w-[150px] h-[150px] rounded-md object-cover"
            />
          </div>
          <div class="flex flex-col justify-between items-start">
            <div class="flex flex-col">
              <span class="text-[1.5rem] font-medium">{{
                item.productName
              }}</span>
              <span class="text-[#787878]"
                >${{ item.productPrice.toFixed(2) }} USD</span
              >

              <div class="flex gap-5 justify-center mt-2 items-center">
                <button
                  class="border p-1 text-bold rounded-full w-[30px] h-[30px] flex justify-center items-center"
                  @click="decrementCount(item)"
                >
                  -
                </button>

                <div>{{ item.productQuantity }}</div>

                <button
                  class="border p-1 text-bold rounded-full w-[30px] h-[30px] flex justify-center items-center"
                  @click="incrementCount(item)"
                >
                  +
                </button>
              </div>
            </div>

            <button
              @click="removeFromCart(item)"
              class="bg-red-500 p-[0.5rem] rounded text-white w-full"
            >
              Delete
            </button>
          </div>
        </div>

        <div class="flex items-center gap-[5rem]">
          <div>
            <h3 class="text-[2rem] font-medium text-[#222]">Total:</h3>
          </div>
          <span class="font-medium text-[1.2rem]">
            ${{ totalProductPrice.toFixed(2) }} USD
          </span>
        </div>

        <button
          type="submit"
          class="w-full bg-green-500 text-white font-bold py-[0.9rem] rounded-md"
          @click="handleCheckout"
        >
          Checkout
        </button>
      </div>

      <div
        v-else
        class="text-[5rem] pt-[2rem] font-medium text-[#222] pb-[20rem]"
      >
        Cart is Empty
      </div>
    </main>
  </div>
  <Toast position="bottom-right" />

  <Explore />
</template>

<script setup>
import { computed } from "vue";
import { cart } from "@/components/addToCart";

import Explore from "@/components/Explore.vue";

import { useToast } from "primevue/usetoast";
const toast = useToast();

const handleCheckout = () => {
  toast.add({
    severity: "error", // or "warn" depending on how you want to communicate the removal
    summary: "Checkout Disabled",
    detail: "Checkout is disabled on this website", // Accessing productName directly
    life: 3000, // Duration of the toast
  });
};

// Toast notification for item removal
const showRemoveToast = (item) => {
  toast.add({
    severity: "info", // or "warn" depending on how you want to communicate the removal
    summary: "Item Removed",
    detail: `${item.productName} was removed from your cart`, // Accessing productName directly
    life: 3000, // Duration of the toast
  });
};

const totalProductPrice = computed(() => {
  return cart.value.reduce((total, item) => {
    const price = Number(item.productPrice);
    return !Number.isNaN(price) ? total + price : total;
  }, 0);
});

// Function to increment quantity
const incrementCount = (item) => {
  item.productQuantity++;
  item.productPrice += item.productOriginalPrice;
};

// Function to decrement quantity
const decrementCount = (item) => {
  if (item.productQuantity > 1) {
    item.productQuantity--;
    item.productPrice -= item.productOriginalPrice;
  }
};

// Function to remove an item from the cart
const removeFromCart = (item) => {
  const index = cart.value.indexOf(item);
  if (index !== -1) {
    cart.value.splice(index, 1); // Remove item from cart
    showRemoveToast(item); // Show toast notification
  }
};
</script>
