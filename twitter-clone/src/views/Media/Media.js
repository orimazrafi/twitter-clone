import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import style from "./style.module.scss"
export const Media = (props) => {
    return (
        <Container className={style.media_wrapper}>
            {props.headline}
            {props.mutedText}
            {props.button}
        </Container>)
}