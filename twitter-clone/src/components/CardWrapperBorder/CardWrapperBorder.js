import React from 'react'

export const CardWrpperWithWideBottomBorder = (props) =>
    <div style={{ border: "1px solid lightgray", borderBottom: "unset", borderTop: "unset" }} >{props.children}</div>
