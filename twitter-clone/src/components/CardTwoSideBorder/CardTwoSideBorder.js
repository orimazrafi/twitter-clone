import React from 'react'
export const CardTwoSideBorder = (props) =>
    <div
        style={{ border: "1px solid lightgray", borderTop: "unset", padding: props.padding ? props.padding : "15px 0 0 0" }}

    >{props.children}</div>