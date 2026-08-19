import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Card, Row, Col } from 'react-bootstrap';

function Dishes({ dishes }) {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand as={Link} to="/dishes">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Row>
          {dishes.map(dish => (
            <Col md={3} key={dish.id} className="mb-4">
              <Card className="h-100">
                <Card.Img variant="top" src={dish.image} alt={dish.name} style={{ height: '200px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title><Link to={`/dishes/${dish.id}`}>{dish.name}</Link></Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Dishes;