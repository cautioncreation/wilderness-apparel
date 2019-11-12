import React, { Component } from 'react';

import { Col, Container, Dropdown } from 'react-bootstrap';

import FilterItem from './FilterItem.js';
import FilterItemButton from './FilterItemButton.js';

class FilterMenu extends Component {
  render() {
    return (
      <Col className="filter-menu" xs="12" md="3">
        <FilterItem title="Categories">
          <FilterItemButton text="Mens"  />
          <FilterItemButton text="Womens" />
          <FilterItemButton text="Pants" />
          <FilterItemButton text="Shirts" />
          <FilterItemButton text="Sweaters" />
          <FilterItemButton text="Accessories" />
          <FilterItemButton text="Featured" />
        </FilterItem>
        <FilterItem title="Sort">
          <FilterItemButton text="Price Low to High" />
          <FilterItemButton text="Price High to Low" />
        </FilterItem>
        <FilterItem title="Size">
          <FilterItemButton text="X-Small" />
          <FilterItemButton text="Small" />
          <FilterItemButton text="Medium" />
          <FilterItemButton text="Large" />
          <FilterItemButton text="X-Large" />
          <FilterItemButton text="XX-Large" />
          <FilterItemButton text="XXX-Large" />
        </FilterItem>
        <FilterItem title="Price">

        </FilterItem>
        <FilterItem title="Colour">
          <FilterItemButton text="Red" />
          <FilterItemButton text="Orange" />
          <FilterItemButton text="Yellow" />
          <FilterItemButton text="Green" />
          <FilterItemButton text="Blue" />
          <FilterItemButton text="Pink" />
          <FilterItemButton text="Purple" />
          <FilterItemButton text="Grey" />
          <FilterItemButton text="Black" />
          <FilterItemButton text="White" />
        </FilterItem>
      </Col>
    )
  }
}

export default FilterMenu;
