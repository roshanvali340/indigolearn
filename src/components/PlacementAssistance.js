import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./PlacementAssistance.css";

const PlacementAssistance = () => (
  <Container className="placement-assistance">
    <h2>100% Placement Assistance</h2>
    <Row>
      <Col md={4} className="placement-section">
        <h3>Resume Building</h3>
        <p>
          Get expert guidance on creating a professional resume that highlights
          your skills and achievements.
        </p>
      </Col>
      <Col md={4} className="placement-section">
        <h3>Career Counseling</h3>
        <p>
          Receive personalized career counseling to help you choose the best
          career path based on your interests and skills.
        </p>
      </Col>
      <Col md={4} className="placement-section">
        <h3>Jobs</h3>
        <p>
          Access a wide range of job opportunities in top companies through our
          extensive network.
        </p>
      </Col>
    </Row>
  </Container>
);

export default PlacementAssistance;
