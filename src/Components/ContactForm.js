import React, {Component} from 'react';
import {Form, Col, Button} from 'react-bootstrap';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validated: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    alert('Thank you for contacting us. Please check your email for a reply from our customer service department!');
  }

  render() {
    return (
      <Form className="contact-form" onSubmit={this.handleSubmit}>
        <Form.Row>
          <Form.Group controlId="contact-form__name" as={Col} xs="12" lg="6">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="John Doe" />
          </Form.Group>
          <Form.Group controlId="contact-form__email" as={Col} xs="12" lg="6">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Johndoe@gmail.com" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group controlId="contact-form__message" as={Col} xs="12">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" type="text" rows="6" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Col xs="12">
            <Button className="contact-form__button" size="lg" type="submit">
              Submit
            </Button>
          </Col>
        </Form.Row>
      </Form>
    )
  }
}

export default ContactForm;
