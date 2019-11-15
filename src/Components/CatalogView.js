import React, { Component } from 'react';

import { Modal, Container, Row, Col, Button } from 'react-bootstrap';

class CatalogView extends Component {
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
                <hr />
                <h3 className="catalog-view__text">{this.props.price}</h3>
              </div>
              <div className="catalog-view__text-container">
                <p className="catalog-view__description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
              </div>
              <div className="catalog-view__button-container">
                <Button className="catalog-view__button" size="block">Add to cart</Button>
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
