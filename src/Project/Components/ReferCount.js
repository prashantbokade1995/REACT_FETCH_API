// import React from 'react'
import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import "./ReferCount.css";

const ReferCount = () => {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 3);
  }, [count]); // <- add the count variable here

  return (
    <>
      <Container>
        <h3>Your Referral status</h3>
        <Row>
          <Col>
            <Card className="card1a">
              <Card.Body>
                <Card.Title>{count}</Card.Title>
                <Card.Title>${calculation}</Card.Title>
                <Card.Text onClick={() => setCount((c) => c + 1)}>
                  Referral Entries
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card2a">
              <Card.Body>
                <Card.Title>{count}</Card.Title>
                <Card.Title>${calculation}</Card.Title>
                <Card.Text onClick={() => setCount((c) => c + 1)}>
                  Referral Entries
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card3a">
              <Card.Body>
                <Card.Title>{count}</Card.Title>
                <Card.Title>${calculation}</Card.Title>
                <Card.Text onClick={() => setCount((c) => c + 1)}>
                  Referral Entries
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
    </>
  );
};

export default ReferCount;
