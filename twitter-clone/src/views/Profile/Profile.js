import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import style from "./style.module.scss";
import { TweetModal } from "../../components/TweetModal/TweetModal";
import { TabsGeneric } from "../../components/TabsGeneric/TabsGeneric";
import { Link, Route } from "react-router-dom";
import { Tweet } from './../Tweet/Tweet';
import { Replies } from "../Replies/Replies";
import { Media } from './../Media/Media';
import { Likes } from './../Likes/Likes';
export const Profile = ({ tweets, onTweetSubmit }) => {
  const [activeTab, setActiveTab] = useState("profile")
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


  return (
    <>
      <TabsGeneric defaultKey={"/profile"} >
        <Container className={style.tabs_generic}>
          <Row>
            <TabItem size={3} tabName={"profile"} tabText={"Tweets"} activeTab={activeTab} setActiveTab={setActiveTab} />
            <TabItem size={3} tabName={"profile/replies"} tabText={"Tweets & replies"} activeTab={activeTab} setActiveTab={setActiveTab} />
            <TabItem size={3} tabName={"profile/media"} tabText={"Media"} activeTab={activeTab} setActiveTab={setActiveTab} />
            <TabItem size={3} tabName={"profile/likes"} tabText={"Likes"} activeTab={activeTab} setActiveTab={setActiveTab} />
          </Row>
        </Container>
      </TabsGeneric>
      <Container fluid className={style.profile}>
        <Route exact path="/profile" render={() => <Tweet tweets={tweets} onLike={handleLike} onAddToTweet={handleTweetModal} />} />
        <Route path="/profile/replies" render={() => <Replies />} />
        <Route path="/profile/media" render={() => <Media />} />
        <Route path="/profile/likes" render={() => <Likes />} />
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

const TabItem = (props) => <Col xs={props.size} style={{ textAlign: "center", padding: "15px" }} onClick={() => props.setActiveTab(props.tabName)}>
  <Link to={`/${props.tabName}`} className={props.activeTab === props.tabName ? style.active_link : style.link} >{props.tabText}</Link>
  {props.activeTab === props.tabName &&
    <hr />
  }
</Col>