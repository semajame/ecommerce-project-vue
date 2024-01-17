<template>
  <div class="flex justify-around items-start relative pb-[5rem]">
    <main class="py-[7rem] px-[4rem]">
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
        >
          Checkout
        </button>
      </div>

      <div v-else class="text-[5rem] pt-[2rem] font-medium text-[#222]">
        Cart is Empty
      </div>
    </main>
  </div>
  <!-- <footer class="py-[5rem] px-[4rem] flex justify-around">
   
  </footer> -->
</template>

<script setup>
import { computed, ref, defineProps } from "vue";
import { cart } from "@/components/addToCart";

// const props = defineProps({
//   plants: {
//     type: Array,
//     required: true,
//   },
// });

const totalProductPrice = computed(() => {
  return cart.value.reduce((total, item) => {
    const price = Number(item.productPrice);
    return !Number.isNaN(price) ? total + price : total;
  }, 0);
});

// const totalProductPrice = () => {
//   return computed(() => {
//     cart.reduce((total, item) => {
//       const price = Number(item.productPrice);
//       return !Number.isNaN(price) ? total + price : total;
//     }, 0);
//   });
// };

const incrementCount = (item) => {
  item.productQuantity++;
  item.productPrice += item.productOriginalPrice;
  console.log(item.productPrice);
};

const decrementCount = (item) => {
  if (item.productQuantity === 1) {
    item.productQuantity = 1;
  } else {
    item.productQuantity--;
    item.productPrice -= item.productOriginalPrice;
    console.log(item.productPrice);
  }
};
</script>
