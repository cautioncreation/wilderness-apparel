import ProductData from './Products.json';

function getCart() {
  let cart = JSON.parse(window.localStorage.getItem('shoppingCart')) || [];

  return cart;
}

export function addToCart(inputId, inputQuantity, inputSize) {
  let cart = getCart();
  let itemFound = false;
  let itemSize = [inputSize];

  for (let i = 0; i < cart.length; i++) {
    let item = cart[i] || [];
    if (item.id === inputId && item.size === inputSize) {
      itemFound = true;
      item.quantity += inputQuantity;
    }
  }
  if (itemFound === false) {
    let item = {
      id: inputId,
      quantity: inputQuantity,
      size: itemSize
    }
    cart.push(item);
  }
  window.localStorage.setItem('shoppingCart', JSON.stringify(cart));
}

export function changeItemQuantity(inputId, inputQuantity, inputSize) {
  let cart = getCart();

  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];

    if (item.id === inputId && item.size === inputSize) {
      item.quantity += inputQuantity;


      if (item.quantity <= 0) {
        cart.splice(i, 1);
      }
    }
  }
  window.localStorage.setItem('shoppingCart', JSON.stringify(cart));
}

export function getCartItems() {
  let cart = getCart();
  let outputCart = [];

  for (let i = 0; i < cart.length; i++) {
    let item = cart[i] || [];

    for (let j = 0; j < ProductData.length; j++) {
      let product = ProductData[j];

      if (item.id === product.id) {
        product["quantity"] = item.quantity;
        product["size"] = item.size;
        outputCart.push(product);
      }
    }
  }
  return outputCart;
}
