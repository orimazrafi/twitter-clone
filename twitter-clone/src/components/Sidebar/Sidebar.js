import React, { useState } from "react";
import { Container, Row, Col, Nav, NavDropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import style from "./style.module.scss";
import { sidebarList } from "../../helpers";
import { TweetModal } from "../TweetModal/TweetModal";
import { ImageAndEmail } from "../ImageAndEmail/ImageAndEmail";
import { RoundButton } from "../RoundButton/RoundButton";

const LinkHover = (props) => (
  <Col
    key={Math.random()}
    style={{ color: "rgba(29,161,242,1.00)" }}
    className={style.link_wrapper}
  >
    <Link
      to={props.item.link}
      aria-label="Twitter"
      role="button"
      data-focusable="true"
      className={style.sidebar_link}
    >
      {props.children}
    </Link>
  </Col>
);

export const Sidebar = ({ onTweetSubmit }) => {
  const location = useLocation()
  const [modalShow, setModalShow] = useState(false);
  const [tweet, setTweet] = useState("");
  const handleTweet = (value) => {
    setTweet(value);
  };
  const tweetTheTweet = () => {
    onTweetSubmit(tweet);
  };
  return (
    <div className={style.sidebar_wrapper}>
      <Container fluid className={style.sidebar}>
        <Row>
          <Col>
            <Nav style={{ flexDirection: "column" }}>
              {sidebarList.map((item, index) =>
                !item.label ? (
                  <LinkHover
                    item={item}
                    key={Math.random()}
                    index={index}
                  >
                    <svg
                      style={{
                        width: "32px",
                      }}
                      viewBox="0 0 24 24"
                      className={item.svg}
                    >
                      <path
                        d={item.svgPath}
                        style={{ fill: "rgba(29,161,242,1.00)" }}
                      ></path>
                    </svg>
                  </LinkHover>
                ) : (
                    <LinkHover
                      item={item}
                      key={Math.random()}
                      index={index}
                    >
                      <svg
                        style={{ width: "32px" }}
                        viewBox="0 0 24 24"
                        className={
                          item.link === location.pathname ? style.activeSvg : style.svg
                        }
                      >
                        <path d={item.svgPath}></path>
                      </svg>
                      <span
                        className={
                          item.link === location.pathname
                            ? style.active + " " + style.label
                            : style.label
                        }
                      >
                        {item.label}
                      </span>
                    </LinkHover>
                  )
              )}
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col>
            <RoundButton
              onModalShow={() => setModalShow(true)}
              label="Tweet"
            />
          </Col>
        </Row>
      </Container>
      <NavDropdown
        className={"sidebar-user-dropdown"}
        title={
          <Container className={style.user_link}>
            <Row>
              <Col>
                <div
                  to={"/"}
                  aria-label="Twitter"
                  role="button"
                  data-focusable="true"
                  className={style.items_wrapper}
                >
                  <ImageAndEmail height="39" width="39" img={"https://pbs.twimg.com/profile_images/1086330360852492295/PExQPH9a_bigger.jpg"} fullName="Ori Mazrafi" userName="@OMazrafi" />
                  <div style={{ height: "20px", marginRight: "-20px" }}>
                    <svg viewBox="0 0 24 24" style={{ height: "20px" }}>
                      <path d="M20.207 8.147c-.39-.39-1.023-.39-1.414 0L12 14.94 5.207 8.147c-.39-.39-1.023-.39-1.414 0-.39.39-.39 1.023 0 1.414l7.5 7.5c.195.196.45.294.707.294s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.022 0-1.413z"></path>
                    </svg>{" "}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        }
        id="basic-nav-dropdown"
      >
        <ImageAndEmail padding="15px" height="39" width="39" img={"https://pbs.twimg.com/profile_images/1086330360852492295/PExQPH9a_bigger.jpg"} fullName="Ori Mazrafi" userName="@OMazrafi" />

        <NavDropdown.Divider />
        <div className={style.dropdown_item}>Add an existing account</div>

        <NavDropdown.Divider />
        <div className={style.dropdown_item}>Logout Ori Mazrafi</div>
      </NavDropdown>
      <TweetModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        className="tweet-modal"
        onTweet={handleTweet}
        tweet={tweet}
        tweetTheTweet={tweetTheTweet}
      />
    </div>
  );
};
