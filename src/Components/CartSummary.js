import React, { Component } from 'react';

import { Col, Button } from 'react-bootstrap';

class CartSummary extends Component {
  render() {
    return (
      <Col className="cart-summary" xs="12" lg="4">
        <div className="cart-summary__title-container">
          <h4 className="cart-summary__title">Cart Summary</h4>
          <hr className="cart-summary__line"/>
        </div>
        <div className="cart-summary__container">
          <h4 className="cart-summary__text">Subtotal: </h4>
          <h4 className="cart-summary__text">${this.props.subTotal.toFixed(2)}</h4>
        </div>
        <div className="cart-summary__container">
          <h4 className="cart-summary__text">Taxes: </h4>
          <h4 className="cart-summary__text">${(this.props.subTotal * 0.05).toFixed(2)}</h4>
        </div>
        <div className="cart-summary__container">
          <h4 className="cart-summary__text">Grand Total: </h4>
          <h4 className="cart-summary__text">${(this.props.subTotal * 1.05).toFixed(2)}</h4>
        </div>
        <div className="cart-summary__container">
          <Button className="cart-summary__button" size="block">
            <h4 className="cart-summary__button-text">Checkout</h4>
          </Button>
        </div>
      </Col>
    )
  }
}

export default CartSummary;
