// Import ref and reactive from Vue
import { ref, reactive } from "vue";

// Initialize cart as a ref
const cart = ref([]);

// Define addToCart function
const addToCart = (item) => {
  let matchingItem;

  const productId = item.id;

  //  Iterate through the cart to find a matching item
  cart.value.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  // If a matching item is found, increment its quantity; otherwise, add a new item to the cart
  if (matchingItem) {
    matchingItem.quantity += item.quantity;
  } else {
    // Use reactive to make the added item reactive
    const newItem = reactive({
      productImage: item.image,
      productName: item.name,
      productPrice: item.price.value,
      productId: item.id,
      productOriginalPrice: item.originalPrice,
      productQuantity: item.quantity,
    });

    // Push the reactive item to the cart
    cart.value.push(newItem);
  }
};

// Export the addToCart and cart
export { addToCart, cart };
