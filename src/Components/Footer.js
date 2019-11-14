import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';

import Logo from '../Assets/svg/Logo.svg';

class Footer extends Component {
  render() {
    return (
      <Container className="footer" fluid="true">
        <Row className="footer__row">
          <Col className="footer__column" xs="6" md="3" lg="2">
            <h3 className="footer__column-title">Explore</h3>
            <Link className="footer__item-link" to="/">
              <p className="footer__item">Home</p>
            </Link>
            <Link className="footer__item-link" to="/shop">
              <p className="footer__item">Shop</p>
            </Link>
            <Link className="footer__item-link" to="/culture">
              <p className="footer__item">Culture</p>
            </Link>
            <Link className="footer__item-link" to="/contact">
              <p className="footer__item">Contact</p>
            </Link>
          </Col>
          <Col className="footer__column" xs="6" md="3">
            <h3 className="footer__column-title">Shop</h3>
            <Link className="footer__item-link" to="/shop">
              <p className="footer__item">Men's</p>
            </Link>
            <Link className="footer__item-link" to="/shop">
              <p className="footer__item">Women's</p>
            </Link>
            <Link className="footer__item-link" to="/shop">
              <p className="footer__item">Featured</p>
            </Link>
            <Link className="footer__item-link" to="/shop">
              <p className="footer__item">Accessories</p>
            </Link>
          </Col>
          <Col className="footer__column--logo" xs="2">
            <img className="footer__logo" src={Logo} alt="Wilderness Apparel Co." />
          </Col>
          <Col className="footer__column" xs="6" md="3">
            <h3 className="footer__column-title">Contact</h3>
            <a className="footer__item-link" href="mailto: byron@cautioncreation.com">
              <p className="footer__item">Email Us</p>
            </a>
            <a className="footer__item-link" href="phone: 780-618-6340">
              <p className="footer__item">Phone Us</p>
            </a>
            <p className="footer__item">10111 111 St NW</p>
            <p className="footer__item">Edmonton, AB T33T4</p>
          </Col>
          <Col className="footer__column" xs="6" md="3" lg="2">
            <h3 className="footer__column-title">Social</h3>
            <a className="footer__item-link" href="https://twitter.com/cautioncreation">
              <p className="footer__item">Twitter</p>
            </a>
            <a className="footer__item-link" href="https://instagram.com/cautioncreation">
              <p className="footer__item">Instagram</p>
            </a>
            <a className="footer__item-link" href="https://facebook.com/byron-l-hill-585">
              <p className="footer__item">Facebook</p>
            </a>
            <p className="footer__item">Google+</p>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Footer;
