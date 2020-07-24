import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ImageAndEmail } from "../../components/ImageAndEmail/ImageAndEmail";

export const Profile = ({ tweets }) => {
  return (
    <Container fluid>
      {tweets?.map((tweet) => (
        <div key={Math.random()}>
          <Row>
            <Col>
              <ImageAndEmail />
            </Col>
          </Row>
          <Row>
            <Col>{tweet.tweet}</Col>
          </Row>
        </div>
      ))}
    </Container>
  );
};
