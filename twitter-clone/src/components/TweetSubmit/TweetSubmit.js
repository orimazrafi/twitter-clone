import { Container, Row, Col, Image, Button } from "react-bootstrap";
import React from 'react'
import style from "./style.module.scss"
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
                        />
                    </>
                )}

                <UserImageAndInput
                    tweet={props.tweet}
                    onTweet={props.onTweet}
                    inputRef={props.inputRef}
                    height={props.height}
                    anotherTweet={props.anotherTweet}
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
                    <TweetOptions
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
                    src="https://pbs.twimg.com/profile_images/1086330360852492295/PExQPH9a_x96.jpg"
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
const TweetOptions = ({ tweetModalIcons, onUpload }) => {
    const handleClick = (index) => {
        switch (index) {
            case 0:
                return onUpload();
            default:
                break;
        }
    };
    return (
        <>
            {tweetModalIcons?.map((icon, index) => (
                <Col
                    xs={icon.size}
                    key={Math.random()}
                    className={style.tweet_options_wrapper}
                    onClick={() => handleClick(index)}
                >
                    <svg
                        viewBox="0 0 24 24"
                        style={{
                            height: icon.height,
                            fill: "rgba(29,161,242,1.00)",
                        }}
                    >
                        <path d={icon.svgPath}></path>
                        {icon.svgPath2 && <path d={icon.svgPath2}></path>}
                        {icon.svgPath3 && <path d={icon.svgPath3}></path>}

                        {icon.name === "smiley" && (
                            <>
                                <circle cx="14.738" cy="9.458" r="1.478"></circle>
                                <circle cx="9.262" cy="9.458" r="1.478"></circle>
                            </>
                        )}
                    </svg>
                </Col>
            ))}
        </>
    );
};
