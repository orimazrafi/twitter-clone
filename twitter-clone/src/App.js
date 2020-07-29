import React, { useState } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Container, Row, Col } from "react-bootstrap";
import Views from "./views";
import { tweetsArray } from "./helpers";
import { Trends } from './components/Trends/Trends';

function App() {
  const [tweets, setTweets] = useState(tweetsArray);
  const handleTweetSubmit = (tweet) => {
    console.log({ tweet });
    setTweets((pre) => [...pre, { user: "Ori Mazrafi", tweet }]);
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
              <Route exact path="/" component={Views.HomePage} />
              <Route exact path="/explore" component={Views.Explore} />
              <Route
                exact
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
                    tweets={tweets}
                    onTweetSubmit={handleTweetSubmit}
                  />
                )}
              />
              <Route exact path="/more" component={Views.More} />
            </Switch>
          </Col>
          <Col xs={4}>
            <Container>
              <Row>
                <Col xs={9}><Trends /></Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
