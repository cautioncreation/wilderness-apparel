import React, { Component } from 'react';
import { Row, Container } from 'react-bootstrap';

import CategoryItem from './CategoryItem';

import Mens from '../Assets/Mens.jpg';
import Womens from '../Assets/Womens.jpg';
import Shirts from '../Assets/Shirts.jpg';
import Sweaters from '../Assets/Sweaters.jpg';
import Pants from '../Assets/Pants.jpg';
import Accessories from '../Assets/Accessories.jpg';
import Featured from '../Assets/Featured.jpg';

class Categories extends Component {
  render() {

    return (
      <div className="categories">
        <Container className="categories__container" fluid="true">
          <Row className="categories__row">
            <CategoryItem src={Mens} alt="Mens" to="/shop" xs="12" lg="6" />
            <CategoryItem src={Womens} alt="Womens" to="/shop" xs="12" lg="6" />
          </Row>
          <Row className="categories__row">
            <CategoryItem src={Shirts} alt="Accessories" to="/shop" xs="12" lg="4" />
            <CategoryItem src={Sweaters} alt="Print" to="/shop" xs="12" lg="4" />
            <CategoryItem src={Pants} alt="Apparel" to="/shop" xs="12" lg="4" />
          </Row>
          <Row className="categories__row">
            <CategoryItem src={Accessories} alt="Mens" to="/shop" xs="12" lg="6" />
            <CategoryItem src={Featured} alt="Womens" to="/shop" xs="12" lg="6" />
          </Row>
        </Container>
      </div>
    )
  }
}

export default Categories;
