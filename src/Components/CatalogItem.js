import React, { Component } from 'react';

import { Col, Card, Button } from 'react-bootstrap';

class CatalogItem extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.item);
  }

  render() {
    return (
      <React.Fragment>
        <Col className="catalog-item" xs="12" md="6" lg="4">
          <Card className="catalog-item__container">
            <button className="catalog-item__image-container" onClick={this.handleClick}>
              <img className="catalog-item__image" src={this.props.item.src} alt="Product" />
            </button>
            <h3 className="catalog-item__text">${this.props.item.price}</h3>
            <h3 className="catalog-item__text">{this.props.item.name}</h3>
            <Button className="catalog-item__button" size="block" onClick={this.handleClick}>Quick View</Button>
          </Card>
        </Col>
    </React.Fragment>
    )
  }
}

export default CatalogItem;
