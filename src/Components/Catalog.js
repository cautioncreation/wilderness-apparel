import React, { Component } from 'react';

import { Col, Row } from 'react-bootstrap';

import CatalogItem from './CatalogItem';
import CatalogView from './CatalogView';

import ProductData from './../Utilities/Products.json';
import { addToCart } from './../Utilities/shoppingCart.js';

class Catalog extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      catalogViewItem: ProductData[0],
      catalogViewIsOpen: false
    });
    this.sortProducts = this.sortProducts.bind(this);
    this.filterCheck = this.filterCheck.bind(this);
    this.filterProducts = this.filterProducts.bind(this);
    this.createCatalog = this.createCatalog.bind(this);
    this.createCatalogItem = this.createCatalogItem.bind(this);
    this.toggleCatalogView = this.toggleCatalogView.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  sortProducts(products) {
    var sortedProducts = [];
    if (this.props.sortFilter[0] === "price low to high") {
      sortedProducts = products;
      sortedProducts.sort((a, b) => (a.price > b.price) ? 1 : -1);
    }

    if (this.props.sortFilter[0] === "price high to low") {
      sortedProducts = products;
      sortedProducts.sort((a, b) => (a.price < b.price) ? 1 : -1);
    }

    if (this.props.sortFilter[0] === "featured items first") {
      var notFeaturedItems = [];

      for (let i = 0; i < products.length; i++) {
        let item = products[i];
        if (item.isFeatured === true) {
          sortedProducts.push(item);
        }

        else {
          notFeaturedItems.push(item);
        }
      }
      sortedProducts = sortedProducts.concat(notFeaturedItems);
    }
    return sortedProducts;
  }

  filterCheck(filterType, product) {
    let filter = filterType + "Filter";
    filter = this.props[filter];
    let productFilterLocation = product[filterType];
    if (filter.length > 0) {
      for (let i = 0; i < filter.length; i++) {
        if (productFilterLocation.indexOf(filter[i]) > -1) {
          return true;
        }
      }
      return false;
    }
    else {
      return true;
    }
  }

  filterProducts() {
    let filteredProducts = [];
    for (let i = 0; i < ProductData.length; i++) {
      if (this.filterCheck("gender", ProductData[i]) === true &&
          this.filterCheck("type", ProductData[i]) === true &&
          this.filterCheck("sizes", ProductData[i]) === true &&
          this.filterCheck("colour", ProductData[i]) === true) {
        filteredProducts.push(ProductData[i]);
      }
    }
    return filteredProducts;
  }

  createCatalog() {
    let items = this.filterProducts();
    items = this.sortProducts(items);
    let catalog = [];

    for ( let i = 0; i < items.length; i++) {
      catalog.push(this.createCatalogItem(items[i]));
    }
    return catalog;
  }

  createCatalogItem(item) {
    let fileName = "./" + item.id + ".jpg";
    let images = require.context('../Assets/products');
    item.src = images(fileName);

    return (
      <CatalogItem
        key={item.id}
        item={item}
        onClick={this.toggleCatalogView}
      />
    )
  }

  toggleCatalogView(inputItem) {
    this.setState({
      catalogViewItem: inputItem,
      catalogViewIsOpen: !this.state.catalogViewIsOpen
    });
  }

  addItem(inputId, inputQuantity, inputSize) {
    addToCart(inputId, inputQuantity, inputSize);

  }

  render() {
    return (
      <Col className="catalog" xs="12" lg="9">
        <Row className="catalog__container">
          {this.createCatalog()}
        </Row>
        <CatalogView
          item={this.state.catalogViewItem}
          show={this.state.catalogViewIsOpen}
          addItem={this.addItem}
          toggleCatalogView={this.toggleCatalogView}
        />
      </Col>
    )
  }
}

export default Catalog;
