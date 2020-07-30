import React from 'react'

import { NavDropdown } from 'react-bootstrap';
export const DropDownRefresh = ({ icon, firstRow, secondRow, thirdRow, fourthRow }) => (
    <NavDropdown
        style={{
            marginLeft: icon.marginLeft,
            marginRight: icon.marginRight,
        }}
        className={"sidebar-users-dropdown"}
        title={
            <svg
                viewBox="0 0 24 24"
                style={{
                    height: icon.height,
                }}
                className={icon.color}
            >
                <path d={icon.svgPath}></path>
                {icon.svgPath2 && <path d={icon.svgPath2}></path>}
            </svg>
        }
        id="basic-nav-dropdown"
    >
        {firstRow}
        {secondRow}
        {thirdRow}
        {fourthRow}
    </NavDropdown>
);