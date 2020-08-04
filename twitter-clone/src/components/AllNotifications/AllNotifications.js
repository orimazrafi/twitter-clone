import React from 'react'
import { CardBorder } from '../CardBorder/CardBorder'
import { SvgIcon } from '../SvgIcon/SvgIcon'
import { Row, Image, Col, Container } from 'react-bootstrap'
import { DropdownItem } from './../DropdownItem/DropdownItem';
import { DropDownWithSmiley } from '../DropDownWithSmiley/DropDownWithSmiley';
import { notifications } from '../../helpers';
import parse from 'html-react-parser';

export const AllNotifications = (props) => {
    return <>
        {notifications.map(notification =>
            <CardBorder
                key={Math.random()}
                padding="10px 0 0  0"
                borderTop="unset"
            >
                <Container>
                    <Row>
                        <Col style={{ marginLeft: "40px" }} >
                            <SvgIcon

                                height="35px"
                                fill="#794BC4"
                                path={
                                    <path d="
                        M22.99 11.295l-6.986-2.13-.877-.326-.325-.88L12.67.975c-.092-.303-.372-.51-.688-.51-.316 0-.596.207-.688.51l-2.392 7.84-1.774.657-6.148 1.82c-.306.092-.515.372-.515.69 0 .32.21.6.515.69l7.956 2.358 2.356 7.956c.09.306.37.515.69.515.32 0 .6-.21.69-.514l1.822-6.15.656-1.773 7.84-2.392c.303-.09.51-.37.51-.687 0-.316-.207-.596-.51-.688z"></path>
                                }
                            />
                            <Image className="ml-1" height="35px" src={notification.pic} alt={notification.userName} width="35px" roundedCircle />
                        </Col>
                        <Col style={{ textAlign: "end" }}
                        >

                            <DropDownWithSmiley

                                firstRow={
                                    <DropdownItem
                                        icon={{
                                            height: "30px",
                                            svgPath: "M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z",
                                            svgPath2: "M12 13.415c1.892 0 3.633.95 4.656 2.544.224.348.123.81-.226 1.035-.348.226-.812.124-1.036-.226-.747-1.162-2.016-1.855-3.395-1.855s-2.648.693-3.396 1.854c-.224.35-.688.45-1.036.225-.35-.224-.45-.688-.226-1.036 1.025-1.594 2.766-2.545 4.658-2.545zm4.216-3.957c0 .816-.662 1.478-1.478 1.478s-1.478-.66-1.478-1.478c0-.817.662-1.478 1.478-1.478s1.478.66 1.478 1.478zm-5.476 0c0 .816-.662 1.478-1.478 1.478s-1.478-.66-1.478-1.478c0-.817.662-1.478 1.478-1.478.817 0 1.478.66 1.478 1.478z",
                                            width: "300px"
                                        }} text={"See less often"} />}
                            />
                        </Col>

                    </Row>
                    <Row style={{ marginLeft: "60px", padding: "10px 0" }}>
                        <Col>
                            <ParseTheNotification notification={notification.headline} userName={notification.userName} />
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: "end", padding: "0 32px 10px 80px", color: "gray", fontWeight: "400" }}>
                            {notification.subText}</Col>
                    </Row>
                </Container>

            </CardBorder>
        )}
    </>
}
const ParseTheNotification = ({ notification, userName }) => {
    return parse(notification.replace(userName, '<b>' + userName + '</b>'));
}