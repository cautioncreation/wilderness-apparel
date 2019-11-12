import React, { Component } from 'react';

import Header from './Header.js';
import Footer from './Footer.js';

import MeganPortrait from '../Assets/MeganPortrait.jpg';
import BenjaminPortrait from '../Assets/BenjaminPortrait.jpg';
import WilliamPortrait from '../Assets/WilliamPortrait.jpg';

import { Container, Jumbotron, Row, Col, Card } from 'react-bootstrap';

class Culture extends Component {
  render() {
    return (
      <div className="culture">
        <Header />
        <Container className="culture__container">
          <Jumbotron className="culture__title-container" fluid>
            <h1 className="culture__title">Our Culture</h1>
            <h4 className="culture__phrase">This is what we're about!</h4>
            <hr className="culture__title-line" />
          </Jumbotron>
          <Row className="culture__row">
            <Col className="culture__spacer" xs="0" md="1" lg="2" />
            <Col className="culture__text-container" xs="12" md="10" lg="8">
              <p className="culture__text">
                We are dedicated to serving our fellow explorers, rebels, and free spirits. Catering to those who can't keep still, can't stay in one place, that's what we are all about. Our goal is to inspire a new generation of people who aren't satisfied just seeing the world through the lens of a camera, but want to experience the world for themselves.
              </p>
            </Col>
            <Col className="culture__spacer" xs="0" md="1" lg="2" />
          </Row>
          <Jumbotron className="culture__title-container" fluid>
            <h1 className="culture__title">Meet The Team</h1>
            <h4 className="culture__phrase">This is who we are!</h4>
            <hr className="culture__title-line" />
          </Jumbotron>
          <Row className="culture__row">
            <Col className="culture__column" xs="12" md="4">
              <Card className="culture__card">
                <img className="culture__card-image" src={BenjaminPortrait} alt="Megan" />
                <h5 className="culture__card-title">Benjamin Ricardo</h5>
                <p className="culture__card-info">Chief Executive Officer</p>
              </Card>
            </Col>
            <Col className="culture__column" xs="12" md="4">
              <Card className="culture__card">
                <img className="culture__card-image" src={WilliamPortrait} alt="Megan" />
                <h5 className="culture__card-title">William Scott</h5>
                <p className="culture__card-info">Chief Marketing Strategist</p>
              </Card>
            </Col>
            <Col className="culture__column" xs="12" md="4">
              <Card className="culture__card">
                <img className="culture__card-image" src={MeganPortrait} alt="Megan" />
                <h5 className="culture__card-title">Megan Osborne</h5>
                <p className="culture__card-info">Chief Design Specialist</p>
              </Card>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    )
  }
}

export default Culture;
