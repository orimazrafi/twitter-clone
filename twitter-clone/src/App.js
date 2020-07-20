import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Container, Row, Col } from "react-bootstrap";
import Views from "./views";

function App() {
  return (
    <Router>
      <Container fluid>
        <Row>
          <Col xs={3}>
            <Container style={{ overflowY: "scroll", height: "100vh" }}>
              <Row>
                <Col xs={{ span: 4, offset: 2 }}>
                  <Sidebar />
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={5}>
            {" "}
            <Switch>
              <Route exact path="/home" component={Views.HomePage} />
              <Route exact path="/explore" component={Views.Explore} />
              <Route
                exact
                path="/notifications"
                component={Views.Notifications}
              />
              <Route exact path="/messages" component={Views.Messages} />
              <Route exact path="/bookmarks" component={Views.BookMarks} />
              <Route exact path="/lists" component={Views.Lists} />
              <Route exact path="/profile" component={Views.Profile} />
              <Route exact path="/more" component={Views.More} />
              <Route path="/" component={Views.NotFound} />
            </Switch>
          </Col>
          <Col xs={4}>
            <Container>
              <Row>
                <Col xs={10}>Trends</Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
