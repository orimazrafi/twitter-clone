import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import style from "./style.module.scss";
import { TweetModal } from "../../components/TweetModal/TweetModal";
import { TabsGeneric } from "../../components/TabsGeneric/TabsGeneric";
import { Route, useHistory } from "react-router-dom";
import { Tweet } from './../Tweet/Tweet';
import { Media } from './../Media/Media';
import Switch from "react-bootstrap/esm/Switch";

export const Profile = ({ tweets, onTweetSubmit }) => {
  const history = useHistory();

  const [activeTab, setActiveTab] = useState("profile")
  useEffect(() => {
    history.push("/" + activeTab)
  }, [activeTab, history])
  const [modalShow, setModalShow] = useState(false);
  const [tweet, setTweet] = useState("");
  const handleTweet = (value) => {
    setTweet(value);
  };
  const handleActiveTab = (tab) => {
    console.log({ tab, activeTab })
    setActiveTab(tab)
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
      <UserCard tweets={tweets} />
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
  {console.log(`/${props.tabName}`)}
  <div className={props.activeTab === props.tabName ? style.active_link : style.link} >{props.tabText}</div>
  {props.activeTab === props.tabName &&
    <hr />
  }
</Col>

const UserCard = ({ tweets }) => <Container className={style.user_card}>
  <Row className={style.inner_wrapper} >
    <Col xs={1} className={style.arrow_wrapper}><svg viewBox="0 0 24 24" ><g><path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path></g></svg></Col>
    <Col style={{ marginLeft: "10px" }}>
      <Col><h2 className={style.headline} > Ori Mazrafi</h2></Col>
      {tweets.length !== 0 ? <Col className={style.text_muted} >{tweets.length} Tweet{tweets.length > 1 && "s"}</Col> :
        <Col className={style.text_muted}>There are no Tweets  for this user yet!</Col>}
    </Col>
  </Row>
</Container>