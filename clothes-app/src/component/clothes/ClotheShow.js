import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Col, Card, Popover, Button, Overlay } from "react-bootstrap";

const ClotheShow = () => {
  const [clothe, setClothe] = useState({});
  const { id } = useParams();
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setClothe(data);
      } catch (err) {}
    };
    getData();
  }, [id]);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <section>
      <div className="show-item">
        <Col>
          <Card.Img variant="top" src={clothe.image} alt={clothe.name} />
          <Card.Body>
            <Card.Title id="show">{clothe.title}</Card.Title>
            <div>
              <div ref={ref}>
                <Card.Text>
                  Description
                  <Button
                    variant="outline-success"
                    id="button"
                    onClick={handleClick}
                  >
                    Click me!
                  </Button>
                  <Overlay
                    show={show}
                    target={target}
                    placement="right"
                    container={ref}
                    containerPadding={20}
                  >
                    <Popover id="popover-contained">
                      <Popover.Header as="h3">Hello!</Popover.Header>
                      <Popover.Body>
                        <strong>{clothe.description}</strong>
                      </Popover.Body>
                    </Popover>
                  </Overlay>
                </Card.Text>
              </div>
            </div>
          </Card.Body>
          <Card.Footer>
            <small className="text">Category: {clothe.category}</small>
            <br />
            <small className="text">Price: £{clothe.price}</small>
            <br />
            <small className="text">Rate: {clothe.rating ? clothe.rating.rate: ""}</small>
            <br />
            <small className="text">Count: {clothe.rating ? clothe.rating.count: ""}</small>
          </Card.Footer>
        </Col>
      </div>
    </section>
  );
};

export default ClotheShow;
