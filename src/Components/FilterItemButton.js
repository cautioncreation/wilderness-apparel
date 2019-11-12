import React, { Component } from 'react';

class FilterButton extends Component {
  constructor(props) {
    super(props);

    this.state = ({isActive: false});

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({isActive: !this.state.isActive});
  }

  render() {
    let className = "filter-item-button" + (this.state.isActive ? "--active" : "");

    return (
      <button className={className} onClick={this.handleClick}>
        <p className="filter-item-button__text">{this.props.text}</p>
      </button>
    )
  }
}

export default FilterButton;
