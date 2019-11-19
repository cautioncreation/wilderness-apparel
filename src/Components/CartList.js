import React, { Component } from 'react';

import CartItem from './CartItem';

import { getCart, addToCart, removeFromCart } from '../Utilities/shoppingCart';

import { Col, Row } from 'react-bootstrap';

class CartList extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      cart: getCart()
    });

    this.setSubTotal();

    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.createCart = this.createCart.bind(this);
    this.setSubTotal = this.setSubTotal.bind(this);
    this.createCartItem = this.createCartItem.bind(this);
  }

  addItem(inputId, inputQuantity, inputSize) {
    addToCart(inputId, inputQuantity, inputSize);
    this.setState({
      cart: getCart()
    });
    this.setSubTotal();
  }

  removeItem(inputId, inputQuantity, inputSize) {
    removeFromCart(inputId, inputQuantity, inputSize);
    this.setState({
      cart: getCart()
    });
    this.setSubTotal();
  }

  createCart() {
    let cartRender = [];
    for (let i = 0; i < this.state.cart.length; i++) {
      cartRender.push(this.createCartItem(this.state.cart[i]));
    }

    if (this.state.cart.length < 1) {
      return (
        <div className="cart-list__container">
          <p className="cart-list__text">
            There are no items in your cart, please add something and check back later.
          </p>
        </div>
      );
    }

    return cartRender;
  }

  setSubTotal() {
    let cart = getCart();
    let subTotal = 0;

    for (let i = 0; i < cart.length; i++) {
      subTotal += cart[i].quantity * cart[i].price;
    }

    this.props.setSubTotal(subTotal);
  }

  createCartItem(item) {
    return (
      <CartItem
        key={item.id}
        id={item.id}
        name={item.name}
        price={item.price}
        src={item.src}
        size={item.size}
        quantity={item.quantity}
        addItem={this.addItem}
        removeItem={this.removeItem}
      />
    )
  }

  render() {
    return (
      <Col className="cart-list" xs="12" lg="8">
        <Row className="cart-list__row">
          <Col className="cart-list__container" md="3" />
          <Col className="cart-list__container" md="4">
            <h4 className="cart-list__text">Product</h4>
          </Col>
          <Col className="cart-list__container" md="2">
            <h4 className="cart-list__text">Price</h4>
          </Col>
          <Col className="cart-list__container" md="3">
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
