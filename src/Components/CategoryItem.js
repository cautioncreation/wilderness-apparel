import React, { Component } from 'react';

import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class CategoryItem extends Component {
  render() {
    return (
      <Col xs={this.props.xs} sm={this.props.sm} md={this.props.md} lg={this.props.lg} xl={this.props.xl} className="category-item">
        <Link className="category-item__link" to={this.props.to}>
          <img className="category-item__image" src={this.props.src} alt={this.props.alt} />
        </Link>
      </Col>
    )
  }
}

export default CategoryItem;
