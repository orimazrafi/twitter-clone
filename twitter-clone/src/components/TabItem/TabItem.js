import React from 'react'
import { Col } from 'react-bootstrap'
import style from "./style.module.scss"
export const TabItem = (props) => <Col xs={props.size} className={style.link_wrapper} style={{ textAlign: "center", padding: "15px" }} onClick={() => props.handleActiveTab(props.tabName)}>
    <div className={props.activeTab === props.tabName ? style.active_link : style.link} >{props.tabText}</div>
    {props.activeTab === props.tabName &&
        <hr />
    }
</Col>