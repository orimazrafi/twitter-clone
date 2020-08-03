import React from 'react'
import style from "./style.module.scss"
export const CardBorder = (props) =>
    <div
        className={style.card_border_wrapper}
        style={{ border: "1px solid lightgray", padding: "15px 0 0 0 " }}

    >{props.children}</div>