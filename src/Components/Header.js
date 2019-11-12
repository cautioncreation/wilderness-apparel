import React, {Component} from 'react';
import { IndexLinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import Logo from '../Assets/Logo.svg';
import BrandName from '../Assets/BrandName.svg';

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
            <NavDropdown className="header__nav-link--dropdown" title="Shop" id="basic-nav-dropdown">
              <IndexLinkContainer className="header__link-container" to="/shop">
                <NavDropdown.Item className="header__nav-item" href="/shop">Men's</NavDropdown.Item>
              </IndexLinkContainer>
              <IndexLinkContainer className="header__link-container" to="/shop">
                <NavDropdown.Item className="header__nav-item" href="/shop">Women's</NavDropdown.Item>
              </IndexLinkContainer>
              <IndexLinkContainer className="header__link-container" to="/shop">
                <NavDropdown.Divider className="header__nav-divider"/>
              </IndexLinkContainer>
              <IndexLinkContainer className="header__link-container" to="/shop">
                <NavDropdown.Item className="header__nav-item" href="/shop">Print</NavDropdown.Item>
              </IndexLinkContainer>
              <IndexLinkContainer className="header__link-container" to="/shop">
                <NavDropdown.Item className="header__nav-item" href="/shop">Apparel</NavDropdown.Item>
              </IndexLinkContainer>
              <IndexLinkContainer className="header__link-container" to="/shop">
                <NavDropdown.Item className="header__nav-item" href="/shop">Accessories</NavDropdown.Item>
              </IndexLinkContainer>
            </NavDropdown>
            <IndexLinkContainer className="header__link-container" to="/culture">
              <Nav.Link className="header__nav-link" href="/culture">Culture</Nav.Link>
            </IndexLinkContainer>
            <IndexLinkContainer className="header__link-container" to="/contact">
              <Nav.Link className="header__nav-link" href="#contact">Contact</Nav.Link>
            </IndexLinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
