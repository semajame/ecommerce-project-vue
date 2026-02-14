<template>
  <div class="checkout-container max-w-7xl mx-auto px-4 py-8">
    <div class="flex flex-col lg:flex-row gap-10">
      <!-- ================= PAYMENT SECTION ================= -->
      <div class="payment-section flex-1">
        <h1 class="text-2xl font-bold mb-6">Billing Details</h1>

        <!-- First + Last Name -->
        <div class="flex flex-col sm:flex-row gap-4 w-full">
          <div class="space-y-1 flex-1">
            <label for="first_name" class="font-bold">First Name</label>
            <input
              type="text"
              id="first_name"
              v-model="card.firstName"
              class="w-full bg-white border border-gray-300 rounded-md py-2 px-3"
            />
          </div>

          <div class="space-y-1 flex-1">
            <label for="last_name" class="font-bold">Last Name</label>
            <input
              type="text"
              id="last_name"
              v-model="card.lastName"
              class="w-full bg-white border border-gray-300 rounded-md py-2 px-3"
            />
          </div>
        </div>

        <!-- Email -->
        <div class="mt-4 space-y-1">
          <label for="email" class="font-bold">Email</label>
          <input
            type="email"
            id="email"
            v-model="card.email"
            class="w-full bg-white border border-gray-300 rounded-md py-2 px-3"
          />
        </div>

        <!-- State + Postal -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div class="space-y-1">
            <label for="state" class="font-bold">State / County</label>
            <input
              type="text"
              id="state"
              v-model="card.state"
              class="w-full bg-white border border-gray-300 rounded-md py-2 px-3"
            />
          </div>

          <div class="space-y-1">
            <label for="postal_code" class="font-bold">Zip / Postal Code</label>
            <input
              type="text"
              id="postal_code"
              v-model="card.postalCode"
              class="w-full bg-white border border-gray-300 rounded-md py-2 px-3"
            />
          </div>
        </div>

        <!-- ================= PAYMENT METHOD ================= -->
        <h2 class="mt-10 mb-5 text-lg font-bold">Payment Method</h2>

        <!-- Card Visual -->
        <div class="card-visual">
          <div class="card-chip"></div>
          <div class="card-number">
            {{ card.number || "#### #### #### ####" }}
          </div>
          <div class="card-bottom">
            <div class="card-expiry">
              <label>Expires</label>
              <div>{{ card.expiry || "MM/YY" }}</div>
            </div>
          </div>
        </div>

        <!-- Payment Form -->
        <form class="space-y-4" @submit.prevent="handleCheckout">
          <div class="space-y-1">
            <label class="font-bold" for="card-number">Card Number</label>
            <input
              v-model="card.number"
              type="text"
              id="card-number"
              placeholder="0000 0000 0000 0000"
              maxlength="19"
              class="w-full bg-white border border-gray-300 rounded-md py-2 px-3"
              required
            />
          </div>

          <div class="flex flex-col sm:flex-row gap-4">
            <div class="space-y-1 flex-1">
              <label class="font-bold" for="expiration"
                >Expiration (MM/YY)</label
              >
              <input
                v-model="card.expiry"
                type="text"
                id="expiration"
                placeholder="01/26"
                maxlength="5"
                class="w-full bg-white border border-gray-300 rounded-md py-2 px-3"
                required
              />
            </div>

            <div class="space-y-1 flex-1">
              <label class="font-bold" for="cvv">CVV</label>
              <input
                v-model="card.cvv"
                type="text"
                id="cvv"
                placeholder="123"
                maxlength="3"
                class="w-full bg-white border border-gray-300 rounded-md py-2 px-3"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            class="w-full mt-10 bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition"
          >
            Confirm Purchase
          </button>
        </form>
      </div>

      <!-- ================= SUMMARY SECTION ================= -->
      <div
        class="summary-section w-full lg:w-[400px] bg-gray-50 p-6 rounded-xl h-fit shadow-sm"
      >
        <h2 class="text-lg font-bold mb-5">Your Greenery</h2>

        <div v-if="cart.length === 0" class="text-gray-500">
          Your cart is empty. Time to adopt some plants!
        </div>

        <div v-else class="space-y-4">
          <div
            v-for="item in cart"
            :key="item.productId"
            class="flex items-center gap-4"
          >
            <img
              :src="item.productImage"
              :alt="item.productName"
              class="w-16 h-16 object-cover rounded-lg"
            />

            <div class="flex-1">
              <h3 class="font-semibold">{{ item.productName }}</h3>
              <p class="text-sm text-gray-500">
                Qty: {{ item.productQuantity }}
              </p>
            </div>

            <div class="font-bold">
              ${{ (item.productPrice * item.productQuantity).toFixed(2) }}
            </div>
          </div>

          <hr />

          <div class="flex justify-between font-bold text-lg pt-2">
            <span>Total</span>
            <span>${{ totalAmount }}</span>
          </div>
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
  height: 235px;
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
