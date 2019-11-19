import ProductData from './Products.json';

export function getCart() {
  let cart = JSON.parse(window.localStorage.getItem('shoppingCart')) || [];
  return cart;
}

export function addToCart(inputId, inputQuantity, inputSize) {
  let cart = getCart();
  let itemFound = false;

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === inputId && cart[i].size === inputSize) {
      itemFound = true;
      cart[i].quantity += inputQuantity;
    }
  }

  if (itemFound === false) {
    for (let i = 0; i < ProductData.length; i++) {
      if (ProductData[i].id === inputId) {
        let item = {
          id: ProductData[i].id,
          name: ProductData[i].name,
          price: ProductData[i].price,
          src: ProductData[i].src,
          size: inputSize,
          quantity: inputQuantity
        };
        cart.push(item);
      }
    }
  }
  window.localStorage.setItem('shoppingCart', JSON.stringify(cart));
}

export function removeFromCart(inputId, inputQuantity, inputSize) {
  let cart = getCart();

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === inputId && cart[i].size === inputSize) {
      cart[i].quantity -= inputQuantity;
    }

    if (cart[i].quantity < 1) {
      cart.splice(i, 1);
    }
  }
  window.localStorage.setItem('shoppingCart', JSON.stringify(cart));
}
