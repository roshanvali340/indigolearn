import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Header.css";

const Header = () => (
  <Navbar bg="violet" variant="dark" expand="lg" className="custom-navbar">
    <Navbar.Brand href="#home">IndigoLearn</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto custom-nav">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
