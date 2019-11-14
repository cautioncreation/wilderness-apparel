import React, { Component } from 'react';

import Header from './Header';
import Hero from './Hero';
import Arrow from './Arrow.js';
import HomeCategories from './HomeCategories';
import Footer from './Footer';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <Hero />
        <Arrow />
        <HomeCategories />
        <Footer />
      </div>
    )
  }
}

export default Home;
