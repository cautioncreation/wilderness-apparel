import React, { Component } from 'react';

class CatalogSizeButton extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onClick(this.props.size);
  }

  render() {
    let className = "catalog-size-button" + (this.props.size === this.props.activeSize ? "--active" : "");
    return (
      <button className={className} onClick={this.onClick}>
        <p className="catalog-size-button__text">{this.props.size}</p>
      </button>
    )
  }
}

export default CatalogSizeButton;
