import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { Col, Card, Button } from 'react-bootstrap';

class CatalogItem extends Component {
  render() {
    let location = "/shop/" + this.props.id;
    let fileName = "./" + this.props.src + ".jpg";
    let images = require.context('../Assets/products');
    let source = images(fileName);

    return(
      <Col className="catalog-item" xs="12" md="6" lg="4">
        <Card className="catalog-item__container">
          <Link className="catalog-item__image-container" to={location}>
            <img className="catalog-item__image" src={source} alt="Product" />
          </Link>
          <h3 className="catalog-item__text">${this.props.price}</h3>
          <h3 className="catalog-item__text">{this.props.name}</h3>
          <Button className="catalog-item__button" size="block">Buy Now</Button>
        </Card>
      </Col>
    )
  }
}

export default CatalogItem;
