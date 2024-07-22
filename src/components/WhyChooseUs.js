import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaChalkboardTeacher,
  FaBookOpen,
  FaUserGraduate,
} from "react-icons/fa";
import "./WhyChooseUs.css";

const WhyChooseUs = () => (
  <Container className="why-choose-us">
    <h2>Why Choose Us?</h2>
    <Row>
      <Col md={4}>
        <div className="custom-card">
          <FaChalkboardTeacher size={40} className="card-icon" />
          <h3>Expert Instructors</h3>
          <p>Learn from industry experts who have a passion for teaching.</p>
        </div>
      </Col>
      <Col md={4}>
        <div className="custom-card">
          <FaBookOpen size={40} className="card-icon" />
          <h3>Comprehensive Curriculum</h3>
          <p>
            Our curriculum is designed to give you the skills and knowledge you
            need to succeed.
          </p>
        </div>
      </Col>
      <Col md={4}>
        <div className="custom-card">
          <FaUserGraduate size={40} className="card-icon" />
          <h3>Successful Alumni</h3>
          <p>
            Join a community of successful alumni who are leaders in their
            fields.
          </p>
        </div>
      </Col>
    </Row>
  </Container>
);

export default WhyChooseUs;
