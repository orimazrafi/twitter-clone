import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ImageAndEmail } from "../../components/ImageAndEmail/ImageAndEmail";
import style from "./style.module.scss";
import { TweetsOptions } from "../../components/TweetsOptions/TweetsOptions";
export const Profile = ({ tweets }) => {
  const CardWrapper = (props) => (
    <div className={style.card}>{props.children}</div>
  );

  return (
    <Container fluid className={style.profile}>
      {tweets?.map((tweet) => (
        <CardWrapper key={Math.random()}>
          <Row>
            <Col>
              <ImageAndEmail
                flexDisplay="flex"
                date="Jul 30, 2019"
                fontWeight="bold"
                height="45"
                width="45"
              />
            </Col>
          </Row>
          <Row>
            <Col xs={{ span: 11, offset: 1 }}>
              <div style={{ marginLeft: "23px", marginTop: "-25px" }}>
                {tweet.tweet}
              </div>
            </Col>
          </Row>
          <div style={{ marginLeft: "55px", marginTop: "10px" }}>
            <TweetsOptions />
          </div>
        </CardWrapper>
      ))}
    </Container>
  );
};
