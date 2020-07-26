import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ImageAndEmail } from "../../components/ImageAndEmail/ImageAndEmail";
import style from "./style.module.scss";
import { TweetsOptions } from "../../components/TweetsOptions/TweetsOptions";
import { TweetModal } from "../../components/TweetModal/TweetModal";
export const Profile = ({ tweets, onTweetSubmit }) => {
  const CardWrapper = (props) => (
    <div className={style.card}>{props.children}</div>
  );

  const [modalShow, setModalShow] = useState(false);
  const [tweet, setTweet] = useState("");
  const handleTweet = (value) => {
    setTweet(value);
  };
  const tweetTheTweet = () => {
    onTweetSubmit(tweet);
  };
  const handleTweetModal = () => {
    setModalShow(true);
  };
  const handleLike = () => {
    console.log("like");
  };
  const withCardBorderGenerator = (InnerComponent) => (props) => (
    <div className={style.profile}>
      <CardWrapper props={props}>
        <InnerComponent {...props} />
      </CardWrapper>
    </div>
  );
  const TweetCard = ({ tweet }) => (
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
            {tweet.tweet}
          </div>
        </Col>
      </Row>
      <div style={{ marginLeft: "55px", marginTop: "10px" }}>
        <TweetsOptions onAddToTweet={handleTweetModal} onLike={handleLike} />
      </div>
    </>
  );
  const TweetCardWrapper = withCardBorderGenerator(TweetCard);

  return (
    <>
      <Container fluid className={style.profile}>
        {tweets?.map((tweet) => (
          <TweetCardWrapper tweet={tweet} key={Math.random()} />
        ))}
      </Container>
      <TweetModal
        anotherTweet={true}
        show={modalShow}
        onHide={() => setModalShow(false)}
        className="tweet-modal"
        onTweet={handleTweet}
        tweet={tweet}
        tweetTheTweet={tweetTheTweet}
      />
    </>
  );
};
