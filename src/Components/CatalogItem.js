import React, { Component } from 'react';

import CatalogView from './CatalogView';

import { Col, Card, Button } from 'react-bootstrap';

class CatalogItem extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      buttonClicked: false
    });

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({buttonClicked: !this.state.buttonClicked});
  }

  render() {
    let fileName = "./" + this.props.src + ".jpg";
    let images = require.context('../Assets/products');
    let source = images(fileName);

    return(
      <React.Fragment>
        <Col className="catalog-item" xs="12" md="6" lg="4">
          <Card className="catalog-item__container">
            <button className="catalog-item__image-container" onClick={this.handleClick}>
              <img className="catalog-item__image" src={source} alt="Product" />
            </button>
            <h3 className="catalog-item__text">${this.props.price}</h3>
            <h3 className="catalog-item__text">{this.props.name}</h3>
            <Button className="catalog-item__button" size="block" onClick={this.handleClick}>Quick View</Button>
          </Card>
        </Col>
        <CatalogView
          show={this.state.buttonClicked}
          handleClick={this.handleClick}
          name={this.props.name}
          price={"$" + this.props.price}
          src={source}
        />
    </React.Fragment>
    )
  }
}

export default CatalogItem;
