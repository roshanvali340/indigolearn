import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./WhatWillYouLearn.css";

const WhatWillYouLearn = () => (
  <Container className="what-will-you-learn">
    <h2>What Will You Learn In ACCA?</h2>
    <Row>
      <Col md={4}>
        <Card className="custom-card">
          <Card.Header className="card-header">Knowledge Level</Card.Header>
          <Card.Body>
            <Card.Text>
              Gain foundational knowledge in finance and accounting.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="custom-card">
          <Card.Header className="card-header">Skill Level</Card.Header>
          <Card.Body>
            <Card.Text>
              Develop essential skills required for the accounting profession.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="custom-card">
          <Card.Header className="card-header">Professional Level</Card.Header>
          <Card.Body>
            <Card.Text>
              Achieve expertise and become a professional accountant.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default WhatWillYouLearn;
