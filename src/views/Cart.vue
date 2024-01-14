<template>
  <div class="flex justify-between items-start relative">
    <main class="py-[5rem] px-[4rem]">
      <h1
        class="text-[4.3rem] tracking-tight font-medium pt-[5rem] max-w-[800px] text-[#222]"
      >
        Cart
      </h1>
    </main>

    <section>
      <div v-if="cart.length > 0">
        <img :src="props.cart.image" alt="" />
      </div>

      <div v-else>Cart is Empty</div>
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
    </section>

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

// PROPS
const props = defineProps({
  cart: {
    type: Array,
    required: true,
  },
});

console.log(props.cart);
</script>
