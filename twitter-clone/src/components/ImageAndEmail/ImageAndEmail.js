import { Image } from "react-bootstrap";
import React from "react";

export const ImageAndEmail = (props) => (
  <div style={{ display: "flex", paddingLeft: props.padding }}>
    {" "}
    <Image
      src="https://pbs.twimg.com/profile_images/1086330360852492295/PExQPH9a_x96.jpg"
      roundedCircle
      height="39"
      width="39"
    />
    <div style={{ marginLeft: "10px", fontWeight: 500 }}>
      <div>Ori Mazrafi</div>
      <div style={{ color: "rgb(101, 119, 134)" }}>@OMazrafi</div>
    </div>
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
);
