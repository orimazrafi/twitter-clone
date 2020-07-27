import React from "react";
import { Row, Col } from "react-bootstrap";
import { ImageAndEmail } from "../../components/ImageAndEmail/ImageAndEmail";
import style from "./style.module.scss";
import parse from 'html-react-parser';
import { TweetsOptions } from './../../components/TweetsOptions/TweetsOptions';


export const Tweet = (props) => {
    return (props.tweets?.map((tweet) => (
        <TweetCardWrapper tweet={tweet} onAddToTweet={props.onAddToTweet} onLike={props.onLike} key={Math.random()} />
    )))
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
const TweetCardWrapper = withCardBorderGenerator(TweetCard);


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