import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { tweetOptionsIcons } from "../../helpers";
import "./style.scss";
export const TweetsOptions = () => {
  return (
    <Container fluid className={"tweet_options_wrapper"}>
      <Row xs={12}>
        {tweetOptionsIcons?.map((icon) => (
          <Col key={Math.random()}>
            {" "}
            <svg
              viewBox="0 0 24 24"
              style={{
                height: icon.height,
              }}
              className={icon.color}
            >
              <path d={icon.svgPath}></path>
              {icon.svgPath2 && <path d={icon.svgPath2}></path>}
              {icon.svgPath3 && <path d={icon.svgPath3}></path>}
            </svg>
            {icon.numberOfLikes && <span>{icon.numberOfLikes}</span>}
          </Col>
        ))}
      </Row>
    </Container>
  );
};
