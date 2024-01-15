<template>
  <div class="flex justify-around items-start relative pb-[5rem]">
    <main class="py-[5rem] px-[4rem]">
      <h1
        class="text-[4.3rem] tracking-tight font-medium pt-[5rem] max-w-[800px] text-[#222]"
      >
        Cart
      </h1>
    </main>

    <section class="px-[4rem] pt-[10rem]">
      <div v-if="cart.length > 0" class="flex gap-[2rem] flex-col">
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
                <!-- <input type="text" readonly v-model="item.quantity" /> -->
                <div>
                  {{ item.productQuantity }}
                </div>
                <button
                  class="border p-1 text-bold rounded-full w-[30px] h-[30px] flex justify-center items-center"
                  @click="incrementCount(item)"
                >
                  +
                </button>
              </div>
            </div>

            <button
              @click="removeFromCart(index)"
              class="bg-red-500 p-[0.5rem] rounded text-white w-full"
            >
              Remove
            </button>
          </div>
        </div>
      </div>

      <div v-else class="text-[5rem] pt-[5rem]">Cart is Empty</div>
    </section>
  </div>
  <!-- <footer class="py-[5rem] px-[4rem] flex justify-around">
    <div>
      <h2 class="text-[4rem] font-medium text-[#222]">Total</h2>
    </div>

    <div>
      <span>
        {{ price }}
      </span>
    </div>
  </footer> -->
</template>

<script setup>
import { defineProps, defineComponent } from "vue";
import { ref } from "vue";

import { cart } from "@/components/addToCart";

const incrementCount = (item) => {
  item.productQuantity++;
  console.log("increment", item.productQuantity);
};

const decrementCount = (item) => {
  if (item.productQuantity === 1) {
    item.productQuantity = 1;
  } else {
    item.productQuantity--;
  }
  console.log("decrement", item.productQuantity);
};

// let price = ref(null);

// const totalPrice = () => {
//   price = cart.price * count;
// };

console.log(cart);
</script>
