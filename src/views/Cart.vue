<template>
  <div class="flex justify-between items-start relative pb-[5rem]">
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
                  @click="decrementCount(index)"
                >
                  -
                </button>
                <div>
                  {{ item.quantity }}
                </div>
                <button
                  class="border p-1 text-bold rounded-full w-[30px] h-[30px] flex justify-center items-center"
                  @click="incrementCount(index)"
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

    <!-- <div>
        <div>
          <div class="cart__product__image">
            <img :src="props.cart.image" alt="" />
          </div>
          <div class="cart__product__info">
            <span class="cart__product__name">{{ props.cart.name }}</span>
            <span class="cart__price">{{ props.cart.price }}</span>
            <button class="cart__remove__button">Remove</button>
          </div>
        </div>

        <div v-else>
          <p>Your cart is empty.</p>
        </div>
      </div> -->
    <footer></footer>
    <!-- <section class="cart__container">
      <div
        class="cart__product"
        v-for="(product, index) in cartProducts"
        :key="index"
      >
        <div>
          <div class="cart__product__image">
            <img :src="product.imageSrc" alt="" />
          </div>
          <div class="cart__product__info">
            <span class="cart__product__name">{{ product.name }}</span>
            <span class="cart__price">{{ product.price }}</span>
            <button class="cart__remove__button" @click="removeCart(index)">
              Remove
            </button>
          </div>
        </div>

        <div class="input__container">
          <input type="number" class="quantity" v-model="product.quantity" />
        </div>
      </div>

      <div class="cart__total__container">
        <div class="sub__total">
          <span>Subtotal</span>

          <span class="total">$24.00 USD</span>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script setup>
import { defineProps, defineComponent } from "vue";
import { ref } from "vue";

import { cart } from "@/components/addToCart";

const incrementCount = (index) => {
  cart.value[index].count.value += 1;
};

const decrementCount = (index) => {
  if (cart.value[index].count.value > 0) {
    cart.value[index].count.value -= 1;
  }
};

console.log(cart);
</script>
