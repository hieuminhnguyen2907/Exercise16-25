import PropTypes from "prop-types";
import React from "react";
import { Button, Card, CardBody, Container } from "react-bootstrap";

export default function AnimalCard({
  name,
  scientificName,
  size,
  diet,
  additional,
  image,
  showAdditional,
}) {
  return (
    <div>
      <Container>
        <Card style={{ width: "22rem", margin: "1rem" }} className="shadow-lg">
          <Card.Img
            variant="top"
            src={image}
            alt={name}
            style={{ height: "250px", objectFit: "cover" }}
          />

          <Card.Body style={{ background: "#f8b400" }}>
            <Card.Title
              style={{ fontSize: "1.8rem", fontWeight: "700", color: "red" }}
            >
              {name}
            </Card.Title>

            <CardBody style={{ background: "#ffffffff" }}>
              <Card.Text>
                <p>
                  <strong>Scientific Name:</strong> {scientificName}
                </p>
                <p>{size} kg</p>
                <p>{diet.join(", ")}.</p>
              </Card.Text>
            </CardBody>

            <Button
              variant="danger"
              onClick={() => showAdditional(additional)}
              style={{ fontWeight: "bold" }}
            >
              More Info
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

AnimalCard.propTypes = {
  name: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
  showAdditional: PropTypes.func.isRequired,
  additional: PropTypes.shape({
    link: PropTypes.string,
    notes: PropTypes.string,
  }),
};

AnimalCard.defaultProps = {
  additional: {
    notes: "No Additional Information",
  },
};
