import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Modal,
  Card,
} from "react-bootstrap";
import "./BecomeAcca.css";

const BecomeAcca = () => {
  const [showModal, setShowModal] = useState(false);

  const handleRequestCallBack = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container className="become-acca">
      <Row>
        <Col md={6} className="text-content">
          <h2>Become ACCA In 18 months</h2>
          <p>
            Join our program to achieve your ACCA certification in just 18
            months. Our expert instructors and comprehensive curriculum will
            guide you every step of the way.
          </p>
          <div className="small-cards">
            <Card className="small-card">Flexible</Card>
            <Card className="small-card">Affordable</Card>
          </div>
          <div className="buttons">
            <Button variant="primary" className="btn-violet">
              Join Demo
            </Button>
            <Button variant="secondary" className="btn-red">
              Enroll
            </Button>
          </div>
        </Col>
        <Col md={6}>
          <Form className="details-card">
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" placeholder="Enter your phone number" />
            </Form.Group>
            <Button
              variant="primary"
              className="btn-violet"
              onClick={handleRequestCallBack}
            >
              Request Call Back
            </Button>
          </Form>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          We have received your request. We will call you back shortly!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default BecomeAcca;
