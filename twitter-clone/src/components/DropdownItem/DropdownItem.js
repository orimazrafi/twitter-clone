import React from 'react'

export const DropdownItem = ({ icon, text }) => (
    <WithHoverEffect icon={icon}>
        {" "}
        <svg
            viewBox="0 0 24 24"
            style={{
                padding: "5px",
                height: icon.height,
            }}
        >
            <path d={icon.svgPath}></path>
            {icon.svgPath2 &&
                <path d={icon.svgPath2}></path>
            }
        </svg>
        <span>{text}</span>
    </WithHoverEffect>
);
const WithHoverEffect = (props) => (
    <div className={"grey-hover-background"} style={{ width: props.icon.width }}>{props.children}</div>
);