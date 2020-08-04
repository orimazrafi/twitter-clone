import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import style from "./style.module.scss";
import { TweetModal } from "../../components/TweetModal/TweetModal";
import { TabsGeneric } from "../../components/TabsGeneric/TabsGeneric";
import { Route, useHistory } from "react-router-dom";
import { Tweet } from './../Tweet/Tweet';
import { Media } from './../Media/Media';
import Switch from "react-bootstrap/esm/Switch";
import { TabItem } from './../../components/TabItem/TabItem';

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
      <UserBigCard user={"ori mazrafi"} />
      <TabsGeneric defaultKey={"profile"} >
        <Container className={style.tabs_generic}>
          <div style={{ padding: "0 15px" }}>
            <Row style={{ border: "1px solid lightgray", borderTop: 0 }}
            >
              <TabItem size={3} tabName={"profile"} tabText={"Tweets"} activeTab={activeTab} handleActiveTab={handleActiveTab} />
              <TabItem size={3} tabName={"profile/replies"} tabText={"Tweets & replies"} activeTab={activeTab} handleActiveTab={handleActiveTab} />
              <TabItem size={3} tabName={"profile/media"} tabText={"Media"} activeTab={activeTab} handleActiveTab={handleActiveTab} />
              <TabItem size={3} tabName={"profile/likes"} tabText={"Likes"} activeTab={activeTab} handleActiveTab={handleActiveTab} />
            </Row>
          </div>
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
const UserBigCard = (props) =>
  <Container  >
    <div style={{ margin: 0, border: "1px solid lightgray", marginTop: "60px", borderBottom: 0 }}>
      <Row style={{ margin: 0 }}>
        <Col style={{ height: "195px", margin: 0, background: "rgb(204, 214, 221)" }}> </Col>
      </Row>
      <Row>
        <Col><img src="https://pbs.twimg.com/profile_images/1086330360852492295/PExQPH9a_200x200.jpg" height="150" width="150" alt={props.user} style={{ borderRadius: "50%", position: "absolute", left: "35px", bottom: 0, padding: "5px", background: "white" }} /></Col>
        <Col style={{ textAlign: "end", margin: "20px 20px 0 0" }}> <Button variant="outline-primary" style={{ padding: "10px", borderRadius: "25px", fontWeight: "bold" }}> Edit Profile</Button> </Col>
      </Row>
      <Row><Col style={{ marginLeft: "30px", margin: "5px 30px", fontSize: "19px", fontWeight: "800" }}>Ori Mazrafi</Col></Row>
      <Row><Col style={{ marginLeft: "30px", margin: "5px 30px", fontSize: "15px", color: "gray" }}>@OMazrafi</Col></Row>
      <Row><Col style={{ marginLeft: "30px", margin: "5px 30px", fontSize: "15px" }}>the programmer</Col></Row>
      <Row><Col style={{ marginLeft: "30px", margin: "5px 30px" }}><DiaryIcon /><span style={{ color: "gray", marginLeft: "5px" }}>Joined January 2019</span> </Col></Row>
      <Row><Col style={{ marginLeft: "30px" }}>
        <a href="8 Following" style={{ marginRight: "10px" }}>8 Following</a>
        <a href="0 Followers">0 Followers</a>
      </Col></Row>
    </div>


  </Container>

const DiaryIcon = () => <svg viewBox="0 0 24 24" style={{ height: "20px" }}>
  <g><path d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z"></path><circle cx="7.032" cy="8.75" r="1.285"></circle><circle cx="7.032" cy="13.156" r="1.285"></circle><circle cx="16.968" cy="8.75" r="1.285"></circle><circle cx="16.968" cy="13.156" r="1.285"></circle><circle cx="12" cy="8.75" r="1.285"></circle><circle cx="12" cy="13.156" r="1.285"></circle><circle cx="7.032" cy="17.486" r="1.285"></circle><circle cx="12" cy="17.486" r="1.285"></circle></g>
</svg>