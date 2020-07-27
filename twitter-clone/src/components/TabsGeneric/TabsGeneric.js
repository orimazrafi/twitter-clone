import React from 'react'
import { Nav } from 'react-bootstrap';
export const TabsGeneric = (props) => {
    return (<Nav variant="pills" defaultActiveKey={props.defaultKey}>
        {props.children}
    </Nav>)
}