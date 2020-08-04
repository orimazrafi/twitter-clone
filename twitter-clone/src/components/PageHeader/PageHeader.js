
import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { SvgIcon } from '../SvgIcon/SvgIcon';

export const PageHeader = props => <Container>
    <Row style={{
        justifyContent: "space-between",
        padding: "10px 15px 0 10px "
    }}>
        <h4 style={{ fontWeight: "bold" }}> {props.headline} </h4 >
        <div>
            <SvgIcon
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
</Container>