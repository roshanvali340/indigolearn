import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./RequestCallBackModal.css";

const RequestCallBackModal = ({ show, handleClose }) => (
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Success</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      We have received your request. We will call you back shortly!
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
);

export default RequestCallBackModal;
