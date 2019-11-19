import React, { Component } from 'react';

import { Col } from 'react-bootstrap';

import FilterItem from './FilterItem.js';
import FilterItemButton from './FilterItemButton.js';

class Filter extends Component {
  render() {
    return (
      <Col className="filter" xs="12" lg="3">
        <div className="filter__title-container">
          <h1 className="filter__title">Filters</h1>
        </div>
        <div className="filter__container">
          <FilterItem title="Categories" arrayLength={(this.props.genderFilter.length + this.props.typeFilter.length)}>
            <FilterItemButton text="mens" type="genderFilter" onClick={this.props.toggleFilter} array={this.props.genderFilter} />
            <FilterItemButton text="womens" type="genderFilter" onClick={this.props.toggleFilter} array={this.props.genderFilter} />
            <FilterItemButton text="pants" type="typeFilter" onClick={this.props.toggleFilter} array={this.props.typeFilter} />
            <FilterItemButton text="shirts" type="typeFilter" onClick={this.props.toggleFilter} array={this.props.typeFilter} />
            <FilterItemButton text="sweaters" type="typeFilter" onClick={this.props.toggleFilter} array={this.props.typeFilter} />
            <FilterItemButton text="accessories" type="typeFilter" onClick={this.props.toggleFilter} array={this.props.typeFilter} />
          </FilterItem>
          <FilterItem title="Sort">
            <FilterItemButton text="price low to high" type="sortFilter" onClick={this.props.replaceFilter} array={this.props.sortFilter} />
            <FilterItemButton text="price high to low" type="sortFilter" onClick={this.props.replaceFilter} array={this.props.sortFilter} />
            <FilterItemButton text="featured items first" type="sortFilter" onClick={this.props.replaceFilter} array={this.props.sortFilter} />
          </FilterItem>
          <FilterItem title="Sizes" arrayLength={this.props.sizesFilter.length}>
            <FilterItemButton text="x-small" type="sizesFilter" onClick={this.props.toggleFilter} array={this.props.sizesFilter} />
            <FilterItemButton text="small" type="sizesFilter" onClick={this.props.toggleFilter} array={this.props.sizesFilter} />
            <FilterItemButton text="medium" type="sizesFilter" onClick={this.props.toggleFilter} array={this.props.sizesFilter} />
            <FilterItemButton text="large" type="sizesFilter" onClick={this.props.toggleFilter} array={this.props.sizesFilter} />
            <FilterItemButton text="x-large" type="sizesFilter" onClick={this.props.toggleFilter} array={this.props.sizesFilter} />
            <FilterItemButton text="xx-large" type="sizesFilter" onClick={this.props.toggleFilter} array={this.props.sizesFilter} />
            <FilterItemButton text="xxx-large" type="sizesFilter" onClick={this.props.toggleFilter} array={this.props.sizesFilter} />
          </FilterItem>
          <FilterItem title="Colour" arrayLength={this.props.colourFilter.length}>
            <FilterItemButton text="red" type="colourFilter" onClick={this.props.toggleFilter} array={this.props.colourFilter} />
            <FilterItemButton text="orange" type="colourFilter" onClick={this.props.toggleFilter} array={this.props.colourFilter} />
            <FilterItemButton text="yellow" type="colourFilter" onClick={this.props.toggleFilter} array={this.props.colourFilter} />
            <FilterItemButton text="green" type="colourFilter" onClick={this.props.toggleFilter} array={this.props.colourFilter} />
            <FilterItemButton text="blue" type="colourFilter" onClick={this.props.toggleFilter} array={this.props.colourFilter} />
            <FilterItemButton text="pink" type="colourFilter" onClick={this.props.toggleFilter} array={this.props.colourFilter} />
            <FilterItemButton text="purple" type="colourFilter" onClick={this.props.toggleFilter} array={this.props.colourFilter} />
            <FilterItemButton text="grey" type="colourFilter" onClick={this.props.toggleFilter} array={this.props.colourFilter} />
            <FilterItemButton text="black" type="colourFilter" onClick={this.props.toggleFilter} array={this.props.colourFilter} />
            <FilterItemButton text="white" type="colourFilter" onClick={this.props.toggleFilter} array={this.props.colourFilter} />
          </FilterItem>
        </div>
      </Col>
    )
  }
}

export default Filter;
