import React, { Component } from 'react';

import { Row, Col, Button } from 'react-bootstrap';

import QuantityCounter from './QuantityCounter';

import DeleteIcon from '../Assets/svg/DeleteIcon.svg';

class CartItem extends Component {
  constructor(props) {
    super(props);

    this.deleteItem = this.deleteItem.bind(this);
    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
  }

  deleteItem() {
    let quantity = -(this.props.quantity);
    console.log(this.props.id);
    console.log(quantity);
    console.log(this.props.size);
    this.props.changeQuantity(this.props.id, quantity, this.props.size);
  }

  decrement() {
    let quantity = -1;

    this.props.changeQuantity(this.props.id, quantity, this.props.size);
  }

  increment() {
    let quantity = 1;
    this.props.changeQuantity(this.props.id, quantity, this.props.size);
  }

  render() {
      let fileName = "./" + this.props.id + ".jpg";
      let images = require.context('../Assets/products');
      let source = images(fileName);
      let text = this.props.name + (this.props.size ? (" - " + this.props.size) : "" );
    return (
      <React.Fragment>
        <Row className="cart-item">
          <Col className="cart-item__container" lg="3">
            <Button className="cart-item__delete-button" onClick={this.deleteItem}>
              <img className="cart-item__delete-icon" src={DeleteIcon} alt="Close Icon" />
            </Button>
            <div className="cart-item__image-container">
              <img className="cart-item__image" src={source} alt={this.props.name} />
            </div>
          </Col>
          <Col className="cart-item__container" lg="4">
            <h6 className="cart-item__text">{text}</h6>
          </Col>
          <Col className="cart-item__container" lg="2">
            <h6 className="cart-item__text">${this.props.price}</h6>
          </Col>
          <Col className="cart-item__container" lg="3">
            <QuantityCounter quantity={this.props.quantity} decrement={this.decrement} increment={this.increment} />
          </Col>
        </Row>
        <hr className="cart-item__line" />
      </React.Fragment>
    )
  }
}

export default CartItem;
