import React, { useEffect, useState, useRef } from "react";
import { Col, Card, Popover, Button, Overlay } from "react-bootstrap";

const ClotheFilter = (props) => {
  console.log("props", props.filtered);
  const [clothes, setClothes] = useState(false);
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    if (props.filtered.filtered === "No matched searches") {
      setClothes(false);
      console.log("Here");
    } else {
      setClothes(props.filtered);
    }
  }, [props.filtered]);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <section>
      <div>
        <Col>
          {!clothes ? (
            <div className="hi">No results</div>
          ) : (
            <div className="hi">
              {props.filtered.map((item) => (
                <div key={item.id}>
                  <Card.Img variant="top" src={item.image} alt={item.name} />
                  <Card.Body>
                    <Card.Title id="filter">{item.title}</Card.Title>
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
                                <strong>{item.description}</strong>
                              </Popover.Body>
                            </Popover>
                          </Overlay>
                        </Card.Text>
                      </div>
                    </div>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text">Name: {item.name}</small>
                    <br />
                    <small className="text">User Name: {item.category}</small>
                    <br />
                    <small className="text">Price: £{item.price}</small>
                    <br />
                    <small className="text">Rate: {item.rating ? item.rating.rate: ""}</small>
                  </Card.Footer>
                </div>
              ))}
            </div>
          )}
        </Col>
      </div>
    </section>
  );
};

export default ClotheFilter;
