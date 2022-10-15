import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ClotheCard = ({ id, image, title, name }) => {
  return (
    <div className="container2">
      <Link to={`/clothes/${id}`}>
        <Card.Img variant="top" src={image} alt={name} />
        <Card.Body>
          <Card.Title id="show">{title}</Card.Title>
        </Card.Body>
      </Link>
    </div>
  );
};

export default ClotheCard;
