import React from 'react'

export const DropdownItem = ({ icon, text, textLeftMargin }) => (
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
            {icon.svgPath3 &&
                <path style={{ fill: "blue" }} d={icon.svgPath3}></path>
            }
        </svg>
        <span style={{ marginLeft: textLeftMargin }}>{text}</span>
    </WithHoverEffect>
);
const WithHoverEffect = (props) => (
    <div className={"grey-hover-background"} style={{ width: props.icon.width }}>{props.children}</div>
);