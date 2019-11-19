import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';
import CartList from './CartList';
import CartSummary from './CartSummary';

import { Container, Row } from 'react-bootstrap';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      subTotal: 0
    });

    this.setSubTotal = this.setSubTotal.bind(this);
  }

  setSubTotal(inputTotal) {
    this.setState({
      subTotal: inputTotal
    });
  }

  render() {
    return (
      <div className="cart">
        <Header />
        <Container className="cart__container" fluid>
          <Row className="cart__row">
            <CartList  setSubTotal={this.setSubTotal}/>
            <CartSummary subTotal={this.state.subTotal}/>
          </Row>
        </Container>
        <Footer />
      </div>
    )
  }
}

export default Cart;
