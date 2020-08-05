import React from 'react';
import style from "./style.module.scss"
export const SvgIcon = (props) => {
    return (
        <svg viewBox="0 0 24 24"
            className={style.svg_icon}
            style={{
                position: props.position,
                top: props.top,
                marginLeft: props.marginLeft,
                left: props.left, height: props.height, fill: props.fill, marginRight: props.marginRight,
                marginBottom: props.marginBottom
            }}><g>
                {props.path}
                {props.path2}
            </g></svg>)
}
