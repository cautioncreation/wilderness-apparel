import React, { Component } from 'react';
import Header from './Header.js';
import ContactForm from './ContactForm.js';
import Footer from './Footer.js';

import { Container, Jumbotron, Button } from 'react-bootstrap';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <Header />
          <Container className="contact__container">
            <Jumbotron className="contact__title-container" fluid>
              <h1 className="contact__title">Contact Us</h1>
              <h4 className="contact__phrase">
                We'd Love to hear from you!
              </h4>
              <hr />
              <div className="contact__info-container">
                <Button className="contact__info" size="lg" as="a" href="mailto: byron@cautioncreation.com">
                  Email Us
                </Button>
                <Button className="contact__info" size="lg" as="a" href="phone: 780-618-6340">
                  Phone Us
                </Button>
              </div>
            </Jumbotron>
            <ContactForm />
          </Container>
        <Footer />
      </div>
    )
  }
}

export default Contact;
