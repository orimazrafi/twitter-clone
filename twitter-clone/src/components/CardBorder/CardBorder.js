import React from 'react'
import style from "./style.module.scss"
export const CardBorder = (props) =>
    <div
        className={style.card_border_wrapper}
        style={{
            border: "1px solid lightgray", borderTop: props.borderTop ? props.borderTop : "1px solid lightgray", padding: props.padding ? props.padding : "15px 0 0 0 ",
            borderBottom: props.borderBottom ? props.borderBottom : "1px solid lightgray",
            height: props.height
        }}

    >{props.children}</div>