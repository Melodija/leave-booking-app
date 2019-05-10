import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../images/logo.png";
import Image from "react-bootstrap/Image";

function Navigation() {
  return (
    <Container>
      <Row>
        <Col />
        <Col md="auto">
          <Image src={Logo} fluid className="logo" />
        </Col>
        <Col />
      </Row>
      <Row>
        <Col>
          <Navbar bg="white" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Container>
                <Nav
                  justify
                  className="justify-content-center"
                  activeKey="/home"
                >
                  <Nav.Item>
                    <Nav.Link href="/" className="navbar_item">
                      Home
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/book-leave" className="navbar_item">
                      Book Leave
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#link" className="navbar_item">
                      View Bookings
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#link" className="navbar_item">
                      Sign Out
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Container>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
}

export default Navigation;
