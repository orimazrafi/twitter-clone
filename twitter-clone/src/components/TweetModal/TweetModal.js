import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Image, Modal, Button } from "react-bootstrap";
import { tweetModalIcons, tweetsArray } from "../../helpers";
import style from "../Sidebar/style.module.scss";
export const TweetModal = (props) => {
  const {
    onHide,
    onTweet,
    tweet,
    show,
    className,
    tweetTheTweet,
    anotherTweet,
  } = props;
  const inputRef = useRef(null);
  useEffect(() => {
    if (show) {
      inputRef.current.focus();
    }
  }, [show]);

  const onUpload = () => {
    var fileInp = document.querySelector('[type="file"]');
    fileInp.click();
  };
  const handleSubmit = () => {
    tweetTheTweet();
    onHide();
  };
  return (
    <Modal
      {...onTweet}
      tweet={tweet}
      show={show}
      onHide={onHide}
      aria-labelledby="contained-modal-title-vcenter"
      className={className}
    >
      <div className="close-btn-wrapper">
        {" "}
        <svg viewBox="0 0 24 24" onClick={onHide}>
          <path d="M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z"></path>
        </svg>
        <hr />
      </div>
      <Container fluid>
        <Row style={{ marginTop: "25px" }}>
          {anotherTweet && (
            <>
              <UserImageAndInput
                tweet={tweetsArray[0].tweet}
                marginBottom="10px"
                minHeight={tweetsArray[0].tweet.length / 2 + 15 + "px"}
              />
            </>
          )}

          <UserImageAndInput
            tweet={tweet}
            onTweet={onTweet}
            inputRef={inputRef}
            height="200px"
            anotherTweet={anotherTweet}
          />
        </Row>
        <Container>
          <Row>
            <Col className="fileSelector">
              {" "}
              <input
                type="file"
                style={{ display: "none" }}
                onChange={onUpload}
              />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row style={{ paddingBottom: "10px" }}>
            <Col xs={1}></Col>
            <TweetOptions
              tweetModalIcons={tweetModalIcons}
              onUpload={onUpload}
            />
            <Col xs={2}>
              <Button
                className={style.tweet_btn}
                style={{ padding: "10px 20px" }}
                disabled={tweet.trim().length === 0}
                onClick={handleSubmit}
              >
                Tweet
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>
    </Modal>
  );
};
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
