import React from 'react';
import style from "./style.module.scss"
export const SvgIcon = (props) => {
    return (
        <svg viewBox="0 0 24 24"
            className={style.svg_icon}
            style={{ height: props.height, fill: props.fill, marginRight: props.marginRight }}><g>
                {props.path}
                {props.path2}
            </g></svg>)
}
