import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import style from "./style.module.scss";
import { TweetModal } from "../../components/TweetModal/TweetModal";
import { TabsGeneric } from "../../components/TabsGeneric/TabsGeneric";
import { Link, Route } from "react-router-dom";
import { Tweet } from './../Tweet/Tweet';
import { Media } from './../Media/Media';
import { Likes } from './../Likes/Likes';
import Switch from "react-bootstrap/esm/Switch";

export const Profile = ({ tweets, onTweetSubmit }) => {
  const [activeTab, setActiveTab] = useState("profile")
  const [modalShow, setModalShow] = useState(false);
  const [tweet, setTweet] = useState("");
  const handleTweet = (value) => {
    setTweet(value);
  };
  const handleActiveTab = (tab) => {
    console.log({ tab })
    setTimeout(() => {

      setActiveTab(tab)
    }, 0)
  }
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
      <TabsGeneric defaultKey={"profile"} >
        <Container className={style.tabs_generic}>
          <Row>
            <TabItem size={3} tabName={"profile"} tabText={"Tweets"} activeTab={activeTab} handleActiveTab={handleActiveTab} />
            <TabItem size={3} tabName={"profile/replies"} tabText={"Tweets & replies"} activeTab={activeTab} handleActiveTab={handleActiveTab} />
            <TabItem size={3} tabName={"profile/media"} tabText={"Media"} activeTab={activeTab} handleActiveTab={handleActiveTab} />
            <TabItem size={3} tabName={"profile/likes"} tabText={"Likes"} activeTab={activeTab} handleActiveTab={handleActiveTab} />
          </Row>
          <hr className={style.tabs_bottom_border} />
        </Container>
      </TabsGeneric>
      <Container fluid className={style.profile}>
        <Switch>

          <Route exact path="/profile" render={() => <Tweet tweets={tweets} onLike={handleLike} onAddToTweet={handleTweetModal} />} />
          <Route path="/profile/replies" render={() => <Tweet tweets={tweets} onLike={handleLike} onAddToTweet={handleTweetModal} />} />
          <Route path="/profile/media" render={() => <Media
            headline={<Row><Col style={{ fontSize: "21px", fontWeight: "bold" }}>You haven’t Tweeted any photos or videos yet</Col></Row>
            }
            mutedText={
              <Row><Col >When you send Tweets with photos or videos in them, it will show up here.</Col></Row>
            }
            button={<Row><Col ><button className={style.media_btn} onClick={() => handleTweetModal()}>Tweet a photo or video</button> </Col></Row>}
            onAddToTweet={handleTweetModal} />} />
          <Route exact path="/profile/likes" render={() => <Media
            headline={<Row><Col style={{ fontSize: "21px", fontWeight: "bold" }}>You don’t have any likes yet</Col></Row>
            }
            mutedText={
              <Row><Col >Tap the heart on any Tweet to show it some love. When you do, it’ll show up here.</Col></Row>
            }
          />} />
        </Switch>

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

const TabItem = (props) => <Col xs={props.size} className={style.link_wrapper} style={{ textAlign: "center", padding: "15px" }} onClick={() => props.handleActiveTab(props.tabName)}>
  <Link to={`/${props.tabName}`} className={props.activeTab === props.tabName ? style.active_link : style.link} >{props.tabText}</Link>
  {props.activeTab === props.tabName &&
    <hr />
  }
</Col>