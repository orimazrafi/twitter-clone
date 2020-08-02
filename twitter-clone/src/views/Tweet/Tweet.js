import React from "react";
import { Row, Col, Container, Button, Image } from "react-bootstrap";
import { ImageAndEmail } from "../../components/ImageAndEmail/ImageAndEmail";
import style from "./style.module.scss";
import parse from 'html-react-parser';
// import { TweetsOptions } from './../../components/TweetsOptions/TweetsOptions';
import { peopleToFollow } from './../../helpers';
import { TweetsOptions } from "../../components/TweetsOptions/TweetsOptions";

export const Tweet = (props) => {
    return <>
        {props.tweets?.map((tweet) => (
            <TweetCardWrapper img={"https://pbs.twimg.com/profile_images/1086330360852492295/PExQPH9a_bigger.jpg"} tweet={tweet} onAddToTweet={props.onAddToTweet} onLike={props.onLike} key={Math.random()} />
        ))}
        <Container>
            <Row style={{ border: "1px solid lightgray", borderTop: "10px solid lightgray" }}>
                <h2 style={{ margin: "10px 0 10px 15px", fontSize: "19px", fontWeight: "bold", fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, Helvetica Neue" }}>Who To Follow</h2></Row>
        </Container>
        {peopleToFollow.map(people => <PeopleToFlow key={Math.random()} img={people.img} people={people.people} sentence={people.sentence} fullName={people.fullName} userName={people.userName} />

        )}

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
                    img={tweet.pic}
                    marginLeft="9px"
                    fullName={tweet.name}
                    userName={tweet.userName}
                    row="mr-1 ml-1"
                    flexDisplay="flex"
                    date={tweet.tweetDate}
                    fontWeight="bold"
                    height="45"
                    width="45"
                />
            </Col>
        </Row>
        <Row>
            <Col xs={{ span: 11, offset: 1 }}>
                <div style={{ marginLeft: "23px", marginTop: "-25px", paddingRight: "20px" }}>
                    <ParseTheTweet tweet={tweet.tweet} />
                </div>
            </Col>
        </Row>

        <ImageTweetComponent tweet={tweet} />
        <div style={{ marginLeft: "60px", marginTop: "10px" }}>
            <TweetsOptions onAddToTweet={onAddToTweet} onLike={onLike} />
        </div>
    </>
);
const FollowCard = (props) => <>
    <PeopleToFollowMuted people={props.people} follow={props.people.length === 1 ? " follows" : "follow"}
    />
    <Row><Col>
        <ImageAndEmail
            img={props.img}
            sentence={props.sentence}
            fullName={props.fullName}
            userName={props.userName}
            closerRows="-5px"
            fontWeight="bold"
            height="45"
            width="45"
            followButton={<Button variant="outline-primary" style={{ padding: "5px 20px", float: "right", borderRadius: "25px", fontWeight: "bold" }}>Follow</Button>}
        /></Col></Row>
    <Row><Col style={{ textAlign: "end", marginRight: "35px" }}>{props.sentence}</Col></Row>

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
        <Col style={{ marginLeft: "30px" }}
        >
            <svg viewBox="0 0 24 24" style={{ height: "15px", fill: "gray", marginRight: "5px" }}><g><path d="M12.225 12.165c-1.356 0-2.872-.15-3.84-1.256-.814-.93-1.077-2.368-.805-4.392.38-2.826 2.116-4.513 4.646-4.513s4.267 1.687 4.646 4.513c.272 2.024.008 3.46-.806 4.392-.97 1.106-2.485 1.255-3.84 1.255zm5.849 9.85H6.376c-.663 0-1.25-.28-1.65-.786-.422-.534-.576-1.27-.41-1.968.834-3.53 4.086-5.997 7.908-5.997s7.074 2.466 7.91 5.997c.164.698.01 1.434-.412 1.967-.4.505-.985.785-1.648.785z"></path></g></svg>
            <span style={{ fontSize: "13px", color: "gray" }}>
                {props.people?.map(p => <span key={Math.random()} className="ml-1 mr-1">{p}</span>)}

                {props.people.length > 0 && props.follow}</span>
        </Col>
    </Row>

</Container>
const TweetImage = (props) =>
    <Image src={props.pic} alt={props.userName} style={{ maxWidth: props.maxWidth, borderRadius: props.borderRadius }} />

const ImageTweetComponent = ({ tweet }) =>
    <>
        {tweet?.images?.length === 1 ?
            <div style={{ padding: "10px 20px 0 80px" }}>
                <TweetImage
                    pic={tweet.images[0]}
                    userName={tweet.userName}
                    maxWidth="100%"
                    borderRadius="25px"
                />
            </div>
            : null}
        {tweet?.images?.length > 1 ?
            <div style={{ padding: "10px 35px 0 95px", }}>
                <Row>
                    <TweetImage
                        pic={tweet.images[0]}
                        userName={tweet.userName}
                        maxWidth="50%"
                        borderRadius="25px 0 0  25px"
                    />
                    <TweetImage
                        pic={tweet.images[1]}
                        userName={tweet.userName}
                        maxWidth="50%"
                        borderRadius="0 25px 25px 0"
                    />
                </Row>
            </div>
            : null}
    </>