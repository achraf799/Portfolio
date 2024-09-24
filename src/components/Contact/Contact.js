import React, { useRef, useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import { AiFillInstagram } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai'; // Import email icon
import Particle from '../Particle';  

export const ContactUs = () => {
  const form = useRef();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);  // State to show success message

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_w9fbcmo', 'template_n81vllj', form.current, 'UBqWRR7Lu5nm12sFP')
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();  
          setShowSuccessMessage(true);  
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section className='section-contact'>
      <Container fluid className="contact-section">
        <Container className="contact-content">
          <Row>
            <Col md={6}>
              <h1 className="headingcontact">Get in Touch</h1>

              {/* Additional content */}
              <h3>I would love to hear from you.</h3>
              <p>I value your feedback and inquiries. Please feel free to reach out to me using the contact form.</p>
              <p><strong className='email_me'>EMAIL ME:</strong></p>
              
              {/* Email icon */}
              <li className="social-icons">
                <a
                  href="mailto:boudiafmouhammedachraf@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </Col>
            <Col md={6}>
              {showSuccessMessage && (
                <Alert variant="success" onClose={() => setShowSuccessMessage(false)} dismissible>
                  Your message has been sent successfully!
                </Alert>
              )}

              <Form ref={form} onSubmit={sendEmail}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" name="user_name" placeholder="Your name" required />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="user_email" placeholder="Your email" required />
                </Form.Group>

                <Form.Group controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={4} name="message" placeholder="Your message" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Send
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
        <Particle /> 
      </Container>
    </section>
  );
};

export default ContactUs;
