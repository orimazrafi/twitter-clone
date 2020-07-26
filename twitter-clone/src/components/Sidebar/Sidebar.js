import React, { useState } from "react";
import { Container, Row, Col, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "./style.module.scss";
import { sidebarList } from "../../helpers";
import { TweetModal } from "../TweetModal/TweetModal";
import { ImageAndEmail } from "../ImageAndEmail/ImageAndEmail";

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
      onClick={() => props.setActiveLink(props.index)}
    >
      {props.children}
    </Link>
  </Col>
);

export const Sidebar = ({ onTweetSubmit }) => {
  const [activeLink, setActiveLink] = useState(0);
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
            <Nav>
              {sidebarList.map((item, index) =>
                !item.label ? (
                  <LinkHover
                    item={item}
                    key={Math.random()}
                    index={index}
                    setActiveLink={setActiveLink}
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
                    setActiveLink={setActiveLink}
                  >
                    <svg
                      style={{ width: "32px" }}
                      viewBox="0 0 24 24"
                      className={
                        activeLink === index ? style.activeSvg : style.svg
                      }
                    >
                      <path d={item.svgPath}></path>
                    </svg>
                    <span
                      className={
                        activeLink === index
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
            <div className={style.tweet_btn} onClick={() => setModalShow(true)}>
              Tweet
            </div>
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
                  <ImageAndEmail height="39" width="39" />
                  <div style={{ height: "20px", marginLeft: "75px" }}>
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
        <ImageAndEmail padding="15px" height="39" width="39" />

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
