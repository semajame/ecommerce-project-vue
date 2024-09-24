// Import ref and reactive from Vue
import { ref, reactive, watchEffect } from "vue";

// Load the cart from localStorage or initialize it as an empty array if not found
const savedCart = localStorage.getItem("cart");
const cart = ref(savedCart ? JSON.parse(savedCart) : []);

// Define addToCart function
const addToCart = (item) => {
  let matchingItem;

  const productId = item.id;

  // Iterate through the cart to find a matching item
  cart.value.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  // If a matching item is found, increment its quantity; otherwise, add a new item to the cart
  if (matchingItem) {
    matchingItem.productQuantity += item.quantity;
  } else {
    // Use reactive to make the added item reactive
    const newItem = reactive({
      productImage: item.image,
      productName: item.name,
      productPrice: item.price,
      productId: item.id,
      productOriginalPrice: item.originalPrice,
      productQuantity: item.quantity,
    });

    // Push the reactive item to the cart
    cart.value.push(newItem);
  }
};

// Watch for changes in the cart and save it to localStorage whenever it changes
watchEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart.value));
});

// Export the addToCart and cart
export { addToCart, cart };
