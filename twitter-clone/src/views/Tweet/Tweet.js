import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { ImageAndEmail } from "../../components/ImageAndEmail/ImageAndEmail";
import style from "./style.module.scss";
import parse from 'html-react-parser';
import { TweetsOptions } from './../../components/TweetsOptions/TweetsOptions';


export const Tweet = (props) => {
    return <>
        {props.tweets?.map((tweet) => (
            <TweetCardWrapper tweet={tweet} onAddToTweet={props.onAddToTweet} onLike={props.onLike} key={Math.random()} />
        ))}
        <Container>
            <Row style={{ border: "1px solid lightgray", borderTop: "10px solid lightgray" }}>
                <h2 style={{ margin: "10px 0 10px 15px", fontSize: "19px", fontWeight: "bold", fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, Helvetica Neue" }}>Who To Follow</h2></Row>
        </Container>
        <PeopleToFlow />
    </>
}
const withCardBorderGenerator = (InnerComponent) => (props) => (
    <div className={style.profile}>
        <CardWrapper props={props}>
            <InnerComponent {...props} />
        </CardWrapper>
    </div>
);
const TweetCard = ({ tweet, onAddToTweet, onLike }) => (
    <>
        <Row>
            <Col>
                <ImageAndEmail
                    flexDisplay="flex"
                    date="Jul 30, 2019"
                    fontWeight="bold"
                    height="45"
                    width="45"
                />
            </Col>
        </Row>
        <Row>
            <Col xs={{ span: 11, offset: 1 }}>
                <div style={{ marginLeft: "23px", marginTop: "-25px" }}>
                    <ParseTheTweet tweet={tweet.tweet} />
                </div>
            </Col>
        </Row>
        <div style={{ marginLeft: "55px", marginTop: "10px" }}>
            <TweetsOptions onAddToTweet={onAddToTweet} onLike={onLike} />
        </div>
    </>
);
const FollowCard = () => <>
    <PeopleToFollowMuted people={"lior Shlien"} />
    <Row><Col>
        <ImageAndEmail
            fontWeight="bold"
            height="45"
            width="45"
            followButton={<Button variant="outline-primary" style={{ padding: "5px 20px", float: "right", borderRadius: "25px", fontWeight: "bold" }}>Follow</Button>}
        /></Col></Row>
    <Row className="ml-auto"><Col >שר הרווחה, העבודה והשירותים החברתיים. אבא לנבו המהמם. חותר שיהיה טוב.</Col></Row>

</>
const TweetCardWrapper = withCardBorderGenerator(TweetCard);
const PeopleToFlow = withCardBorderGenerator(FollowCard)

const CardWrapper = (props) => (
    <div className={style.card}>{props.children}</div>
);
const ParseTheTweet = ({ tweet }) => {
    const str = tweet.split(' ');
    const stringWithLinks = str.map(s =>
        s.includes("@") || s.includes("#") || s.includes("http") ?
            `<a href=${s}>${s}</a>` : s
    )
    return parse(stringWithLinks.join(" "))
}
const PeopleToFollowMuted = (props) => <Container>
    <Row>
        <Col md={{ span: 11, offset: 1 }}
        >
            <svg viewBox="0 0 24 24" style={{ height: "10px", fill: "gray", marginRight: "5px" }}><g><path d="M12.225 12.165c-1.356 0-2.872-.15-3.84-1.256-.814-.93-1.077-2.368-.805-4.392.38-2.826 2.116-4.513 4.646-4.513s4.267 1.687 4.646 4.513c.272 2.024.008 3.46-.806 4.392-.97 1.106-2.485 1.255-3.84 1.255zm5.849 9.85H6.376c-.663 0-1.25-.28-1.65-.786-.422-.534-.576-1.27-.41-1.968.834-3.53 4.086-5.997 7.908-5.997s7.074 2.466 7.91 5.997c.164.698.01 1.434-.412 1.967-.4.505-.985.785-1.648.785z"></path></g></svg>
            <span style={{ fontSize: "13px", color: "gray" }}>{props.people}
                {props.people && " follows"}</span>
        </Col>
    </Row>

</Container>