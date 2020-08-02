import { Container, Row, Col, Image, Button } from "react-bootstrap";
import React from 'react'
import style from "./style.module.scss"
import { TweetOptionsIcons } from "../TweetOptionsIcons/TweetOptionsIcons";

export const TweetSubmit = (props) =>
    <div style={{ border: props.border }}>
        {props.header}

        <Container fluid>
            <Row style={{ marginTop: "25px" }}>
                {props.anotherTweet && (
                    <>
                        <UserImageAndInput
                            tweet={props.tweetsArray[0].tweet}
                            marginBottom="10px"
                            minHeight={props.tweetsArray[0].tweet.length / 2 + 15 + "px"}
                            pic={props.pic}
                        />
                    </>
                )}

                <UserImageAndInput
                    tweet={props.tweet}
                    onTweet={props.onTweet}
                    inputRef={props.inputRef}
                    height={props.height}
                    anotherTweet={props.anotherTweet}
                    pic={props.pic}
                />
            </Row>
            <Container>
                <Row>
                    <Col className="fileSelector">
                        {" "}
                        <input
                            type="file"
                            style={{ display: "none" }}
                            onChange={props.onUpload}
                        />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row style={{ paddingBottom: "10px" }}>
                    <Col xs={1}></Col>
                    <TweetOptionsIcons
                        tweetModalIcons={props.tweetModalIcons}
                        onUpload={props.onUpload}
                    />
                    <Col xs={2}>
                        <Button
                            className={style.tweet_btn}
                            style={{ padding: "10px 20px", borderRadius: props.borderRadius }}
                            disabled={props.tweet.trim().length === 0}
                            onClick={props.handleSubmit}
                        >
                            Tweet
      </Button>
                    </Col>
                </Row>
            </Container>
        </Container>
    </div >

const UserImageAndInput = (props) => {
    return (
        <>
            <Col
                xs={1}
                style={{
                    height: props.height,
                    marginBottom: props.marginBottom,
                }}
            >
                <Image
                    src={props.pic}
                    roundedCircle
                    height="45"
                    width="45"
                />
            </Col>
            <Col xs={11}>
                <textarea
                    style={{ minHeight: props.minHeight }}
                    id="d"
                    placeholder="What's Happening?"
                    type="text"
                    onChange={(e) => props.onTweet(e.target.value)}
                    value={props.tweet}
                    className="form-control border-0"
                    ref={props.inputRef}
                />
            </Col>
        </>
    );
};
