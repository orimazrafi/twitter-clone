import React, { useState } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Container, Row, Col } from "react-bootstrap";
import Views from "./views";
import { tweetsArray, otherUsersTweetsArray } from "./helpers";
import { Trends } from './components/Trends/Trends';
import { NothingToSee } from './components/NothingToSee/NothingToSee';
function App() {
  const [profileTweets, setProfileTweets] = useState(tweetsArray);
  const [tweets, setTweets] = useState(otherUsersTweetsArray);
  const handleTweetSubmit = (tweet) => {
    console.log({ tweet });
    setTweets((pre) => [...pre, { user: "Ori Mazrafi", tweet }]);
  };
  const handleProfileTweetSubmit = (tweet) => {
    console.log({ tweet });
    setProfileTweets((pre) => [...pre, { user: "Ori Mazrafi", tweet }]);
  };
  return (
    <Router>
      <Container fluid>
        <Row>
          <Col xs={3}>
            <Container style={{ overflowY: "auto", height: "100vh" }}>
              <Row>
                <Col xs={{ offset: 2 }}>
                  <Sidebar onTweetSubmit={handleTweetSubmit} />
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={5}>
            <Switch>
              <Route exact path="/" render={() => <Views.HomePage onTweetSubmit={handleTweetSubmit}
                tweets={tweets}

              />} />
              <Route exact path="/explore" component={Views.Explore} />
              <Route
                path="/notifications"
                component={Views.Notifications}
              />
              <Route exact path="/messages" component={Views.Messages} />
              <Route exact path="/bookmarks" component={Views.BookMarks} />
              <Route exact path="/lists" component={Views.Lists} />
              <Route
                path="/profile"
                render={() => (
                  <Views.Profile
                    tweets={profileTweets}
                    onTweetSubmit={handleProfileTweetSubmit}
                  />
                )}
              />
              {/* <Route exact path="/more" component={Views.More} /> */}
            </Switch>
          </Col>
          <Col xs={4}>
            <Container>
              <Row>
                <Col xs={9}>
                  <Route
                    path="/"
                    render={(props) =>
                      props.location.pathname !== "/messages" ?
                        <Trends />
                        : <NothingToSee
                          headline="You don’t have a message selected"
                          subText="Choose one from your existing messages, or start a new one."
                          button="New message"
                          buttonPadding="10px 15px"
                          border="unset"
                        />
                    }
                  />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
