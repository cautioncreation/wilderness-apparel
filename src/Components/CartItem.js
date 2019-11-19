import React, { Component } from 'react';

import { Row, Col, Button } from 'react-bootstrap';

import QuantityCounter from './QuantityCounter';

import DeleteIcon from '../Assets/svg/DeleteIcon.svg';

class CartItem extends Component {
  constructor(props) {
    super(props);

    this.delete = this.delete.bind(this);
    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
    this.getSource = this.getSource.bind(this);
    this.createText = this.createText.bind(this);
  }

  delete() {
    this.props.removeItem(this.props.id, this.props.quantity, this.props.size);
  }

  decrement() {
    this.props.removeItem(this.props.id, 1, this.props.size);
  }

  increment() {
    this.props.addItem(this.props.id, 1, this.props.size);
  }

  getSource() {
    let fileName = "./" + this.props.id + ".jpg";
    let images = require.context('../Assets/products');
    return images(fileName);
  }

  createText() {
    let text = "";
    if (this.props.size === "one size") {
      text = this.props.name;
    }

    else {
      text = this.props.name + " - " + this.props.size;
    }
    return text;
  }

  render() {
    return (
      <React.Fragment>
        <Row className="cart-item">
          <Col className="cart-item__container" xs="12" md="3">
            <Button className="cart-item__delete-button" onClick={this.delete}>
              <img className="cart-item__delete-icon" src={DeleteIcon} alt="Close Icon" />
            </Button>
            <div className="cart-item__image-container">
              <img className="cart-item__image" src={this.getSource()} alt={this.props.name} />
            </div>
          </Col>
          <Col className="cart-item__container" xs="12" md="4">
            <h6 className="cart-item__name">{this.createText()}</h6>
          </Col>
          <Col className="cart-item__container" xs="6" md="2">
            <h6 className="cart-item__text">${this.props.price}</h6>
          </Col>
          <Col className="cart-item__container--right" xs="6" md="3">
            <QuantityCounter quantity={this.props.quantity} decrement={this.decrement} increment={this.increment} />
          </Col>
        </Row>
        <hr className="cart-item__line" />
      </React.Fragment>
    )
  }
}

export default CartItem;
