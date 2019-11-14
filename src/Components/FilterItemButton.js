import React, { Component } from 'react';

class FilterItemButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.type, this.props.text);
  }
  render() {
    let className = "filter-item-button" + (this.props.array.includes(this.props.text) ? "--active" : "");
    return (
      <button className={className} onClick={this.handleClick}>
        <p className="filter-item-button__text">{this.props.text}</p>
      </button>
    )
  }
}

export default FilterItemButton;
