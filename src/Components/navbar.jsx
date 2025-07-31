import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <Navbar bg="transparent" variant="dark" expand="lg" fixed="top">
      <Container>
     <Navbar.Brand href="#home">
        <img
          src="/Portfolio1/ZF_logo_STD_Blue_3CC.svg.png"  
          width="40"
          height="40"
          className="d-inline-block align-top"
          alt="Zahin's Portfolio Logo"
        />
    
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto custom-left">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
