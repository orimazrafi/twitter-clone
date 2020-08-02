import React from 'react';
export const SvgIcon = (props) => {
    return (
        <svg viewBox="0 0 24 24"
            style={{ height: props.height, fill: props.fill, marginRight: props.marginRight }}><g>
                {props.path}
                {props.path2}
            </g></svg>)
}
