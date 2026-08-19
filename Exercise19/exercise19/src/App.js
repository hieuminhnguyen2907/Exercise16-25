import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AnimalCard from "./AnimalCard";
import data from "./data";

export default function App() {
  const showAdditional = (additional) => {
    const pairs = Object.entries(additional).map(
      ([key, value]) => `${key}: ${value}`
    );
    alert(pairs.join("\n"));
  };

  return (
    <Container>
      <h1 className="text-center mt-4">Animals</h1>
      <Row className="mt-4">
        {data.map((animal) => (
          <Col md={4} key={animal.name}>
            <AnimalCard {...animal} showAdditional={showAdditional} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
