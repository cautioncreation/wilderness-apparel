import React, { Component } from 'react';

import { addToCart } from '../Utilities/shoppingCart';

import QuantityCounter from './QuantityCounter';
import CatalogSizeButton from './CatalogSizeButton';

import { Modal, Container, Row, Col, Button } from 'react-bootstrap';

class CatalogView extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      quantity: 1,
      size: (this.props.sizes.includes("one size") ? "one size" : "")
    });

    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.changeSize = this.changeSize.bind(this);
    this.createSizes = this.createSizes.bind(this);
    this.createSizeButton = this.createSizeButton.bind(this);
  }

  decrement() {
    this.setState({
      quantity: this.state.quantity - 1
    });
  }

  increment() {
    this.setState({
      quantity: this.state.quantity + 1
    });
  }

  handleClick() {
    if (this.state.quantity > 0 && this.state.size !== "") {
      addToCart (this.props.id, this.state.quantity, this.state.size);

      alert(this.state.quantity + " " + this.props.name + " added to cart");
    }

    else {
      alert(this.props.name + " not added to cart, check quantity and size of the item");
    }
  }

  changeSize(newSize) {
    this.setState({
      size: newSize
    });
  }

  createSizes() {
    let sizeButtons = [];
    console.log(this.props.sizes);

    if (this.props.sizes.includes("one size") === false) {
      for (let i = 0; i < this.props.sizes.length; i++) {
        let size = this.props.sizes[i];
        sizeButtons.push(this.createSizeButton(size));
      }
    }
    return sizeButtons;
  }

  createSizeButton(size) {
    return (
      <CatalogSizeButton key={size} activeSize={this.state.size} size={size} onClick={this.changeSize} />
    )
  }

  render() {
    return (
      <Modal className="catalog-view" size="lg" aria-labelledby="Catalog-View" show={this.props.show} onHide={this.props.handleClick} centered>
      <Modal.Header className="catalog-view__header" closeButton />
      <Modal.Body className="catalog-view__body">
        <Container className="catalog-view__container" fluid>
          <Row className="catalog-view__row">
            <Col className="catalog-view__column" xs="12" md="6">
              <div className="catalog-view__image-container">
                <img className="catalog-view__image" src={this.props.src} alt={this.props.name} />
              </div>
            </Col>
            <Col className="catalog-view__column" xs="12" md="6">
              <div className="catalog-view__text-container">
                <h3 className="catalog-view__text">{this.props.name}</h3>
                <hr className="catalog-view__line"/>
              </div>
              <div className="catalog-view__price-container">
                <h3 className="catalog-view__text">{this.props.price}</h3>
                <QuantityCounter quantity={this.state.quantity} decrement={this.decrement} increment={this.increment} />
              </div>
              <div className="catalog-view__text-container">
                <p className="catalog-view__description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
              </div>
              <div className="catalog-view__size-container">
                {this.createSizes()}
              </div>
              <div className="catalog-view__button-container">
                <Button className="catalog-view__button" size="block" onClick={this.handleClick}>Add to cart</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
    )
  }
}

export default CatalogView;
