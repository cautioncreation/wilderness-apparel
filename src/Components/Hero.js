import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import HomeFooter from './HomeFooter.js';
import CategoriesArrow from './CategoriesArrow';

import { Button } from 'react-bootstrap';

import HeroTextDesktop from '../Assets/HeroTextDesktop.svg';
import HeroTextMobile from '../Assets/HeroTextMobile.svg';

class Hero extends Component {
  render () {
    return (
      <div className="hero">
        <div className="hero__container">
          <picture className="hero__text-container">
            <source className="hero__text" media="(min-width: 500px)" srcSet={ HeroTextDesktop } />
            <img className="hero__text" src={ HeroTextMobile } alt="Explore The Unknown"/>
          </picture>
          <div className="hero__button-container">
            <Link className="hero__button-link" to="/categories">
              <Button className="hero__button" size="lg">
                Explorer Collection
              </Button>
            </Link>
          </div>
        </div>
        <CategoriesArrow />
        <HomeFooter />
      </div>
    );
  }
}

export default Hero;
