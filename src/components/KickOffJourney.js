import React from "react";
import { Container, Button } from "react-bootstrap";
import "./KickOffJourney.css";

const KickoffJourney = () => (
  <Container className="kickoff-journey">
    <h2>Kick Off Your ACCA Prep Journey</h2>
    <p>
      Sign In for a Free Demo and get started on your path to success with our
      expert guidance.
    </p>
    <Button variant="primary" className="sign-in-button">
      Sign In
    </Button>
  </Container>
);

export default KickoffJourney;
