import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Entitlement() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col className="text-center entitlements" xs={6} md={4}>
          <p>30</p>
          <p>Entitlement</p>
        </Col>
        <Col className="text-center entitlements" xs={6} md={4}>
          <p>10</p>
          <p>Booked / Taken</p>
        </Col>
        <Col className="text-center entitlements" xs={6} md={4}>
          <p>20</p>
          <p>Remaining</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Entitlement;
