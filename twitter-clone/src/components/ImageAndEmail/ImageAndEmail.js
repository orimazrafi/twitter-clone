import { Image, Container, Row, Col } from "react-bootstrap";
import React from "react";

export const ImageAndEmail = (props) => (
  <Container fluid>
    <div style={{ display: "flex", paddingLeft: props.padding, padding: props.padding }}>
      <Row>
        <Col >
          <Image
            src={props.img}
            roundedCircle
            height={props.height}
            width={props.height}
          />
        </Col>

      </Row>
      <Row>
        <Col >
          <div
            style={{
              marginLeft: "10px",
              fontWeight: 500,
              display: props.flexDisplay,
            }}
          >
            <div className="" style={{ fontWeight: props.fontWeight, marginBottom: props.closerRows, marginLeft: props.marginLeft }}>
              {props.fullName}
            </div>{" "}
            <div className={props.row ? props.row : ""} style={{ color: "rgb(101, 119, 134)" }}>
              {props.userName}
            </div>
            {props.date && (
              <div style={{ color: "rgb(101, 119, 134)" }}>
                &middot;{" " + props.date}
              </div>
            )}
          </div>

        </Col>

      </Row>
      <Col  >
        {props.followButton}
      </Col>
      {props.padding && (
        <svg
          style={{
            width: "20px",
            margin: "0 10px 10px auto",
          }}
          viewBox="0 0 24 24"
        >
          <path
            style={{ fill: "rgb(29, 161, 242)" }}
            d="M9 20c-.264 0-.52-.104-.707-.293l-4.785-4.785c-.39-.39-.39-1.023 0-1.414s1.023-.39 1.414 0l3.946 3.945L18.075 4.41c.32-.45.94-.558 1.395-.24.45.318.56.942.24 1.394L9.817 19.577c-.17.24-.438.395-.732.42-.028.002-.057.003-.085.003z"
          ></path>
        </svg>
      )}
    </div>
  </Container>
);
