import React from 'react'
import { CardBorder } from '../CardBorder/CardBorder'
import { Container, Row, Col } from 'react-bootstrap'
import { RoundButton } from '../RoundButton/RoundButton'
export const NothingToSee = (props) => <CardBorder
    borderBottom="unset"
    height={props.height}>
    <Container >
        <Row >
            <Col className="text-center mt-3">
                <p style={{ fontSize: "19px", fontWeight: "bold", marginBottom: "5px" }}>{props.headline}</p>
            </Col>
        </Row>
        <Row>
            <Col className="text-center mt-0">
                <p style={{ fontSize: "17px", fontWeight: "400", color: "gray" }}>{props.subText}</p>
            </Col>
        </Row>
        {props.button ?
            <Row className="justify-content-center mt-3" >
                <RoundButton
                    label={props.button}
                    padding={props.buttonPadding}
                />
            </Row> : null
        }

    </Container>

</CardBorder>