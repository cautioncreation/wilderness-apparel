import React, { Component } from 'react';
import { Row, Container } from 'react-bootstrap';

import Header from './Header.js';
import Filter from './Filter.js';
import ShopList from './ShopList.js';
import Footer from './Footer.js';

import ShopHeroImage from '../Assets/ShopHeroImage.jpg';

class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: {
        categories: {
          mens: false,
          womens: false,
          pants: false,
          shirts: false,
          sweaters: false,
          accessories: false,
          featured: false
        },
        sort: {
          highToLow: false,
          lowToHigh: false
        },
        size: {
          xs: false,
          sm: false,
          md: false,
          lg: false,
          xl: false,
          xxl: false,
          xxxl: false
        },
        price: {
          min: false,
          max: false
        },
        colour: {
          red: false,
          orange: false,
          yellow: false,
          green: false,
          blue: false,
          pink: false,
          purple: false,
          grey: false,
          black: false,
          white: false
        }
      }
    };
  }
  render() {
    return(
      <div className="shop">
        <Header />
        <Container className="shop__container" fluid>
          <div className="shop__hero-image-container">
            <img className="shop__hero-image" src={ShopHeroImage} alt="Wilderness Apparel Co." />
          </div>
          <Row className="shop__row">
            <Filter filters={this.state.filters} />
            <ShopList />
          </Row>
        </Container>
        <Footer />
      </div>
    )
  }
}

export default Shop;
