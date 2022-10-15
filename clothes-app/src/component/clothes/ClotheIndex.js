import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Row, CardGroup } from "react-bootstrap";
import ClotheCard from "./ClotheCard";
import ScrollToTop from "react-scroll-to-top";

const ClotheIndex = () => {
  const [dress, setDress] = useState([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          "https://fakestoreapi.com/products"
        );
        setDress(data);
      } catch (err) {
        setHasError(true);
      }
    };
    getData();
  }, []);

  return (
    <section>
      <div>
        <Row className="grid-container">
          <CardGroup>
            <Card>
              {dress.length > 0 ? (
                <CardGroup>
                  <Card id="dress-map">
                    {dress.map((clothe) => (
                      <ClotheCard key={clothe.id} {...clothe} />
                    ))}
                  </Card>
                </CardGroup>
              ) : (
                <h2 className="index">
                  {hasError ? "Please wait" : "...loading"}
                </h2>
              )}
            </Card>
          </CardGroup>
        </Row>
        <ScrollToTop smooth />
      </div>
    </section>
  );
};

export default ClotheIndex;
