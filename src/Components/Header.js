import React, {Component} from 'react';
import { IndexLinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';

import Logo from '../Assets/svg/Logo.svg';
import BrandName from '../Assets/svg/BrandName.svg';

class Header extends Component {
  render() {
    return (
      <Navbar className="header" expand="none">
        <IndexLinkContainer className="header__logo-container" to="/">
          <img className="header__logo" src={Logo} alt="Logo" />
        </IndexLinkContainer>
        <IndexLinkContainer className="header__brand-container" to="/">
          <img className="header__brand" src={BrandName} alt="Wilderness Apparel Co." />
        </IndexLinkContainer>
        <Navbar.Toggle className="header__toggle" aria-controls="Sidenav"/>
        <Navbar.Collapse className="header__nav-container" id="Sidenav">
          <Nav className="header__nav">
            <IndexLinkContainer className="header__link-container" to="/">
              <Nav.Link className="header__nav-link">Home</Nav.Link>
            </IndexLinkContainer>
            <IndexLinkContainer className="header__link-container" to="/shop">
              <Nav.Link className="header__nav-link">Shop</Nav.Link>
            </IndexLinkContainer>
            <IndexLinkContainer className="header__link-container" to="/cart">
              <Nav.Link className="header__nav-link">Cart</Nav.Link>
            </IndexLinkContainer>
            <IndexLinkContainer className="header__link-container" to="/culture">
              <Nav.Link className="header__nav-link">Culture</Nav.Link>
            </IndexLinkContainer>
            <IndexLinkContainer className="header__link-container" to="/contact">
              <Nav.Link className="header__nav-link">Contact</Nav.Link>
            </IndexLinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
