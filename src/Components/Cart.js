import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';
import CartList from './CartList';
import CartSummary from './CartSummary';

import { Container, Row } from 'react-bootstrap';

class Cart extends Component {
  render() {
    return (
      <div className="cart">
        <Header />
        <Container className="cart__container" fluid>
          <Row className="cart__row">
            <CartList />
            <CartSummary />
          </Row>
        </Container>
        <Footer />
      </div>
    )
  }
}

export default Cart;
