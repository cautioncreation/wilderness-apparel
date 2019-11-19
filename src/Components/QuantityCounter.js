import React, { Component } from 'react';

import { Button } from 'react-bootstrap';

class QuantityCounter extends Component {
  constructor(props) {
    super(props);

    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
  }

  decrement() {
    this.props.decrement();
  }

  increment() {
    this.props.increment();
  }
  render() {
    return (
      <div className="quantity-counter">
        <Button className="quantity-counter__button--left" onClick={this.decrement}>
          <h5 className="quantity-counter__button-text">-</h5>
        </Button>
        <div className="quantity-counter__text-container">
          <h5 className="quantity-counter__text">{this.props.quantity}</h5>
        </div>
        <Button className="quantity-counter__button--right" onClick={this.increment}>
          <h5 className="quantity-counter__button-text">+</h5>
        </Button>
      </div>
    )
  }
}

export default QuantityCounter;
