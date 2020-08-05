
import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { SvgIcon } from '../SvgIcon/SvgIcon';

export const PageHeader = props => <Container>
    <Row style={{
        justifyContent: "space-between",
        padding: props.padding ? props.padding : "10px 15px 10px 10px "
    }}>
        {props.anotherSvg}
        <h4 style={{ fontWeight: "bold", margin: props.margin ? props.margin : "unset" }}> {props.headline} </h4>
        {props.nextSvg}

        <div>
            <SvgIcon
                {...props}
                height={props.height}
                fill={props.fill}
                path={
                    <path d={props.svgPath}></path>
                }
                path2={
                    <path d={props.svgPath2}></path>
                }

            />
        </div>
    </Row>
    {props.subText}
</Container>