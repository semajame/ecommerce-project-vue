<template>
  <div class="checkout-container">
    <div class="payment-section">
      <h2 class="my-5 text-lg font-bold">Payment Details</h2>

      <div class="card-visual">
        <div class="card-chip"></div>
        <div class="card-number">
          {{ card.number || "#### #### #### ####" }}
        </div>
        <div class="card-bottom">
          <div class="card-holder">
            <label>Card Holder</label>
            <div>{{ card.name || "FULL NAME" }}</div>
          </div>
          <div class="card-expiry">
            <label>Expires</label>
            <div>{{ card.expiry || "MM/YY" }}</div>
          </div>
        </div>
      </div>

      <form class="payment-form" @submit.prevent="handleCheckout">
        <div class="input-group">
          <label>Card Name</label>
          <input
            v-model="card.name"
            type="text"
            placeholder="John Doe"
            class="bg-white"
            required
          />
        </div>
        <div class="input-group">
          <label>Card Number</label>
          <input
            v-model="card.number"
            type="text"
            placeholder="0000 0000 0000 0000"
            maxlength="19"
            class="bg-white"
            required
          />
        </div>
        <div class="row">
          <div class="input-group">
            <label>Expiration (MM/YY)</label>
            <input
              v-model="card.expiry"
              type="text"
              class="bg-white"
              placeholder="01/26"
              maxlength="5"
              required
            />
          </div>
          <div class="input-group">
            <label>CVV</label>
            <input
              v-model="card.cvv"
              class="bg-white"
              type="text"
              placeholder="123"
              maxlength="3"
              required
            />
          </div>
        </div>
        <button type="submit" class="checkout-btn">
          Confirm Purchase (${{ totalAmount }})
        </button>
      </form>
    </div>

    <div class="summary-section">
      <h2 class="my-5 text-lg font-bold">Your Greenery</h2>
      <div v-if="cart.length === 0" class="empty-cart">
        Your cart is empty. Time to adopt some plants!
      </div>
      <div v-else class="cart-items">
        <div v-for="item in cart" :key="item.productId" class="cart-item">
          <img
            :src="item.productImage"
            :alt="item.productName"
            class="product-img"
          />
          <div class="product-info">
            <h3>{{ item.productName }}</h3>
            <p>Qty: {{ item.productQuantity }}</p>
          </div>
          <div class="product-price">
            ${{ (item.productPrice * item.productQuantity).toFixed(2) }}
          </div>
        </div>

        <hr />

        <div class="total-row">
          <span>Total</span>
          <span class="total-price">${{ totalAmount }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from "vue";
import { cart } from "@/components/addToCart";

// Reactive state for the payment form
const card = reactive({
  name: "",
  number: "",
  expiry: "",
  cvv: "",
});

// Calculate total price
const totalAmount = computed(() => {
  return cart.value
    .reduce((total, item) => {
      return total + item.productPrice * item.productQuantity;
    }, 0)
    .toFixed(2);
});

const handleCheckout = () => {
  alert(`Thank you for your order, ${card.name}! Your plants are on the way.`);
  // Clear cart logic would go here
};
</script>

<style scoped>
.checkout-container {
  padding-top: 10rem;
  padding-bottom: 10rem;
  display: flex;
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
  font-family: "Inter", sans-serif;
  color: #2d3436;
}

/* Payment Styling */
.payment-section {
  flex: 1.5;
  background: #f9f9f9;
  padding: 30px;
  border-radius: 12px;
}

.card-visual {
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  border-radius: 15px;
  padding: 25px;
  color: white;
  margin-bottom: 30px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-chip {
  width: 45px;
  height: 35px;
  background: #e0e0e0;
  border-radius: 5px;
}

.card-number {
  font-size: 1.4rem;
  letter-spacing: 2px;
}

.card-bottom {
  display: flex;
  justify-content: space-between;
}

.card-bottom label {
  font-size: 0.7rem;
  text-transform: uppercase;
  opacity: 0.8;
}

/* Form Styling */
.payment-form .input-group {
  margin-bottom: 15px;
}

.payment-form label {
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
}

.payment-form input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
}

.row {
  display: flex;
  gap: 15px;
}

.checkout-btn {
  width: 100%;
  padding: 15px;
  background: #27ae60;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;
}

/* Cart Summary Styling */
.summary-section {
  flex: 1;
  border-left: 1px solid #eee;
  padding-left: 40px;
}

.cart-item {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.product-img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
}

.product-info h3 {
  margin: 0;
  font-size: 1rem;
}

.product-price {
  margin-left: auto;
  font-weight: bold;
}

.total-row {
  display: flex;
  justify-content: space-between;
  font-size: 1.4rem;
  font-weight: bold;
  margin-top: 20px;
}

.total-price {
  color: #27ae60;
}
</style>
