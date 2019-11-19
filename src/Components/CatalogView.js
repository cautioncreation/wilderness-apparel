import React, { Component } from 'react';

import QuantityCounter from './QuantityCounter';
import CatalogSizeButton from './CatalogSizeButton';

import { Modal, Container, Row, Col, Button } from 'react-bootstrap';

class CatalogView extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      size: (this.props.item.sizes.includes("one size") ? "one size" : ""),
      quantity: 1
    });

    this.addItem = this.addItem.bind(this);
    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
    this.changeSize = this.changeSize.bind(this);
    this.toggleCatalogView = this.toggleCatalogView.bind(this);
    this.createSizeButtons = this.createSizeButtons.bind(this);
  }

  addItem() {
    if (this.props.item.sizes.includes(this.state.size)) {
      this.props.addItem(this.props.item.id, this.state.quantity, this.state.size);
      alert(this.state.quantity + " " + this.props.item.name + " added to cart");
    }

    else {
      alert(this.props.item.name + " not added to cart, please select a size");
    }
  }

  decrement() {
    this.setState ({
      quantity: (this.state.quantity - 1)
    });
  }

  increment() {
    this.setState ({
      quantity: (this.state.quantity + 1)
    });
  }

  changeSize(newSize) {
    this.setState({
      size: newSize,
    });
  }

  toggleCatalogView() {
    this.props.toggleCatalogView(this.props.item);
  }

  createSizeButtons() {
    let sizeButtons = [];
    if ((this.props.item.sizes.includes("one size")) === false) {
      for (let i = 0; i < this.props.item.sizes.length; i++) {
        let size = this.props.item.sizes[i];
        sizeButtons.push(
          <CatalogSizeButton
            key={size}
            size={size}
            activeSize={this.state.size}
            onClick={this.changeSize}
          />
        );
      }
    }
    return sizeButtons;
  }

  render() {
    return (
      <Modal className="catalog-view" size="lg" aria-labelledby="Catalog-View" show={this.props.show} onHide={this.toggleCatalogView} centered>
      <Modal.Header className="catalog-view__header" closeButton />
      <Modal.Body className="catalog-view__body">
        <Container className="catalog-view__container" fluid>
          <Row className="catalog-view__row">
            <Col className="catalog-view__column" xs="12" lg="6">
              <div className="catalog-view__image-container">
                <img className="catalog-view__image" src={this.props.item.src} alt={this.props.item.name} />
              </div>
            </Col>
            <Col className="catalog-view__column" xs="12" lg="6">
              <div className="catalog-view__text-container">
                <h3 className="catalog-view__text">{this.props.item.name}</h3>
                <hr className="catalog-view__line"/>
              </div>
              <div className="catalog-view__price-container">
                <h3 className="catalog-view__text">${this.props.item.price}</h3>
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
                {this.createSizeButtons()}
              </div>
              <div className="catalog-view__button-container">
                <Button className="catalog-view__button" size="block" onClick={this.addItem}>Add to cart</Button>
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
