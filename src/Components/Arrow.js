import React, { Component } from 'react';

import ArrowImage from '../Assets/svg/Arrow.svg';

class Arrow extends Component {
  render() {
    return (
      <div className="arrow">
        <h5 className="arrow__text">
          Shop Now
        </h5>
        <img className="arrow__icon" src={ArrowImage} alt="arrow" />
      </div>
    )
  }
}

export default Arrow;
