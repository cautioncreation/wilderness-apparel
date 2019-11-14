import React, { Component } from 'react';
import { Row, Container } from 'react-bootstrap';

import HomeCategoryItem from './HomeCategoryItem';

import Mens from '../Assets/jpg/Mens.jpg';
import Womens from '../Assets/jpg/Womens.jpg';
import Shirts from '../Assets/jpg/Shirts.jpg';
import Sweaters from '../Assets/jpg/Sweaters.jpg';
import Pants from '../Assets/jpg/Pants.jpg';
import Accessories from '../Assets/jpg/Accessories.jpg';
import Featured from '../Assets/jpg/Featured.jpg';

class HomeCategories extends Component {
  render() {

    return (
      <div className="home-categories">
        <Container className="home-categories__container" fluid="true">
          <Row className="home-categories__row">
            <HomeCategoryItem src={Mens} alt="Mens" to="/shop" xs="12" lg="6" />
            <HomeCategoryItem src={Womens} alt="Womens" to="/shop" xs="12" lg="6" />
          </Row>
          <Row className="home-categories__row">
            <HomeCategoryItem src={Shirts} alt="Accessories" to="/shop" xs="12" lg="4" />
            <HomeCategoryItem src={Sweaters} alt="Print" to="/shop" xs="12" lg="4" />
            <HomeCategoryItem src={Pants} alt="Apparel" to="/shop" xs="12" lg="4" />
          </Row>
          <Row className="home-categories__row">
            <HomeCategoryItem src={Accessories} alt="Mens" to="/shop" xs="12" lg="6" />
            <HomeCategoryItem src={Featured} alt="Womens" to="/shop" xs="12" lg="6" />
          </Row>
        </Container>
      </div>
    )
  }
}

export default HomeCategories;
