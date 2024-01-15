// Define cart array

const cart = [];

// Define addToCart function
const addToCart = (item, quantity) => {
  let matchingItem;

  const productId = item.id;

  // Iterate through the cart to find a matching item
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  // If a matching item is found, increment its quantity; otherwise, add a new item to the cart
  if (matchingItem) {
    matchingItem.quantity += item.quantity;
  } else {
    cart.push({
      productImage: item.image,
      productName: item.name,
      productPrice: item.price,
      productId: item.id,
      productQuantity: item.quantity,
    });

    console.log(cart);
  }
};

export { addToCart, cart };
