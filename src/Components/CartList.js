import React, { Component } from 'react';

import CartItem from './CartItem';

import { getCartItems, changeItemQuantity } from '../Utilities/shoppingCart';

import { Col, Row } from 'react-bootstrap';

class CartList extends Component {
  constructor(props) {
    super(props);

    this.createCart = this.createCart.bind(this);
    this.createCartItem = this.createCartItem.bind(this);
    this.changeQuantity = this.changeQuantity.bind(this);
  }

  createCart() {
    let cartItems = getCartItems();
    let cart = [];
    for (let i = 0; i < cartItems.length; i++) {
      cart.push(this.createCartItem(cartItems[i]));
    }

    return cart;
  }

  createCartItem(item) {
  console.log(item.size);
    return (
      <CartItem
        key={item.id}
        id={item.id}
        name={item.name}
        price={item.price}
        size={item.size}
        quantity={item.quantity}
        changeQuantity={this.changeQuantity}
      />
    )
  }

  changeQuantity(id, quantity, size) {
    console.log(id);
    console.log(quantity);
    console.log(size);
    changeItemQuantity(id, quantity, size);
    this.forceUpdate();
  }

  render() {
    return (
      <Col className="cart-list" xs="12" lg="7">
        <Row className="cart-list__row">
          <Col className="cart-list__container" lg="3" />
          <Col className="cart-list__container" lg="4">
            <h4 className="cart-list__text">Product</h4>
          </Col>
          <Col className="cart-list__container" lg="2">
            <h4 className="cart-list__text">Price</h4>
          </Col>
          <Col className="cart-list__container" lg="3">
            <h4 className="cart-list__text">Quantity</h4>
          </Col>
        </Row>
        <hr className="cart-list__line"/>
        {this.createCart()}
      </Col>
    )
  }
}

export default CartList;
