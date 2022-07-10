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
import i18next from "i18next";
import { useTranslation } from "react-i18next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

import logo from "../images/logo.jpg";

import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

const Navigation = () => {
  const { t } = useTranslation();

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
              {t("home")}
            </Nav.Link>
            <Nav.Link as={Link} to="/orders">
              {t("orders")}
            </Nav.Link>
            <Nav.Link as={Link} to="/charts">
              {t("charts")}
            </Nav.Link>
            <NavDropdown
              title={<FontAwesomeIcon icon={faLanguage} size="lg" />}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item
                disabled={i18next.language === "ar"}
                onClick={() => {
                  i18next.changeLanguage("ar");
                }}
              >
                🇸🇦 العربية
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                disabled={i18next.language === "en"}
                onClick={() => {
                  i18next.changeLanguage("en");
                }}
              >
                🇺🇸 English
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button variant="dark" as={Link} to="/orderForm">
            {t("new_order")}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
