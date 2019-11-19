import React, { Component } from 'react';
import { Row, Container } from 'react-bootstrap';

import Header from './Header.js';
import Filter from './Filter.js';
import Catalog from './Catalog.js';
import Footer from './Footer.js';

import ShopHeroImage from '../Assets/jpg/ShopHeroImage.jpg';

class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      genderFilter: [],
      typeFilter: [],
      sortFilter: ["featured items first"],
      sizesFilter: [],
      colourFilter: []
    };

    this.toggleFilter = this.toggleFilter.bind(this);
    this.replaceFilter = this.replaceFilter.bind(this);
  }

  toggleFilter(filterType, filterName) {
    var filterArray = this.state[filterType] || [];

    if (filterArray.includes(filterName)) {
      let filterIndex = filterArray.indexOf(filterName);
      filterArray.splice(filterIndex, 1);
    }
    else {
      filterArray.push(filterName);
    }

    this.setState({[filterType]: filterArray});
  }

  replaceFilter(filterType, filterName) {
    this.setState({[filterType]: [filterName]});
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
            <Filter
              genderFilter={this.state.genderFilter}
              typeFilter={this.state.typeFilter}
              sortFilter={this.state.sortFilter}
              sizesFilter={this.state.sizesFilter}
              colourFilter={this.state.colourFilter}
              toggleFilter={this.toggleFilter}
              replaceFilter={this.replaceFilter}
            />
            <Catalog
              genderFilter={this.state.genderFilter}
              typeFilter={this.state.typeFilter}
              sortFilter={this.state.sortFilter}
              sizesFilter={this.state.sizesFilter}
              colourFilter={this.state.colourFilter}
            />
          </Row>
        </Container>
        <Footer />
      </div>
    )
  }
}

export default Shop;
