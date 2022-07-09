import React from "react";
import {
  Button,
  Image,
  Nav,
  Navbar,
  Container,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <Image className="logo" src={logo} roundedCircle="true" />
          CoffeeLand
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/orders">
              Orders
            </Nav.Link>
            <Nav.Link as={Link} to="/charts">
              Charts
            </Nav.Link>
            <NavDropdown title="Language" id="basic-nav-dropdown">
              <NavDropdown.Item>العربي</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>English</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button variant="dark" as={Link} to="/orderForm">
            New Order
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
