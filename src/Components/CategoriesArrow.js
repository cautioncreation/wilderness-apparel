import React, { Component } from 'react';

import Arrow from '../Assets/Arrow.svg';

class CategoriesArrow extends Component {
  render() {
    return (
      <div className="categories-arrow">
        <h5 className="categories-arrow__text">
          Shop Now
        </h5>
        <img className="categories-arrow__icon" src={Arrow} alt="arrow" />
      </div>
    )
  }
}

export default CategoriesArrow;
