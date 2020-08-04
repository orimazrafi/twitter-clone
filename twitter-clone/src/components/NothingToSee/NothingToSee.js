import React from 'react'
import { CardBorder } from '../CardBorder/CardBorder'
import { Container, Row, Col } from 'react-bootstrap'
export const NothingToSee = (props) => <CardBorder
    borderBottom="unset"
    height={props.height}>
    <Container >
        <Row >
            <Col className="text-center mt-3">
                <p style={{ fontSize: "19px", fontWeight: "bold", marginBottom: "5px" }}>Nothing to see here — yet</p>
            </Col>
        </Row>
        <Row>
            <Col className="text-center mt-0">
                <p style={{ fontSize: "17px", fontWeight: "400", color: "gray" }}>When someone mentions you, you’ll find it here.</p>
            </Col>
        </Row>

    </Container>

</CardBorder>