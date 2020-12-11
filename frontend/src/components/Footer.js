import React from 'react'
import { Container, Row, Col, Alert, Button } from 'react-bootstrap'

const Footer = () =>
{
  return (
    <footer>
      <Container>
        <Row>
          <Col md={6}>
            <h4 style={{ padding: '10px' }}>
              <Alert variant="danger">
                We Deliver Every Product with in 48 Hours in Ghaziabad.
              </Alert>
            </h4>
          </Col>
          <Col md={6}>
            <h4 style={{ padding: '10px' }}>
              <Alert variant="danger">
                Free Delivery upto ₹500 Orders. ₹50 Below ₹500/-
              </Alert>
            </h4>
          </Col>
        </Row>


        <Alert variant="success">
          <Alert.Heading>Contact Us</Alert.Heading>
          <hr />
          <p>Call : +91 8587 901 095</p>
          <hr />
          <p className="mb-0">
            Email: gopaljitoys@gmail.com</p>
        </Alert>

        <Alert variant="primary">

          Designed & Developed By: <a href="https://wa.me/918920365351">Darshan Kumar Singh (+91 8920 365 351)</a>
        </Alert>
        <Row>
          <Col className='text-center py-3'>Copyright &copy; Gopal Ji Toys</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
