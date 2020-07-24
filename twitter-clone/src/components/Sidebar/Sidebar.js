import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  Image,
  Modal,
  NavDropdown,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "./style.module.scss";
import { sidebarList, tweetModalIcons } from "../../helpers";
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
const UserImageAndInput = (props) => {
  return (
    <>
      <Col xs={1} style={{ height: props.height }}>
        <Image
          src="https://pbs.twimg.com/profile_images/1086330360852492295/PExQPH9a_x96.jpg"
          roundedCircle
          height="45"
          width="45"
        />
      </Col>
      <Col xs={11}>
        <input
          placeholder="What's Happening?"
          type="text"
          onChange={(e) => props.onTweet(e.target.value)}
          value={props.tweet}
          className="form-control border-0"
          ref={props.inputRef}
        />
      </Col>
    </>
  );
};
const TweetOptions = ({ tweetModalIcons, onUpload }) => {
  const handleClick = (index) => {
    switch (index) {
      case 0:
        return onUpload();
      default:
        break;
    }
  };
  return (
    <>
      {tweetModalIcons?.map((icon, index) => (
        <Col
          xs={icon.size}
          key={Math.random()}
          className={style.tweet_options_wrapper}
          onClick={() => handleClick(index)}
        >
          <svg
            viewBox="0 0 24 24"
            style={{
              height: icon.height,
              fill: "rgba(29,161,242,1.00)",
            }}
          >
            <path d={icon.svgPath}></path>
            {icon.svgPath2 && <path d={icon.svgPath2}></path>}
            {icon.svgPath3 && <path d={icon.svgPath3}></path>}

            {icon.name === "smiley" && (
              <>
                <circle cx="14.738" cy="9.458" r="1.478"></circle>
                <circle cx="9.262" cy="9.458" r="1.478"></circle>
              </>
            )}
          </svg>
        </Col>
      ))}
    </>
  );
};

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
                  <ImageAndEmail />
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
        <ImageAndEmail padding="15px" />

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
        // onUpload={onUpload}
      />
    </div>
  );
};
const TweetModal = (props) => {
  const { onHide, onTweet, tweet, show, className, tweetTheTweet } = props;
  const inputRef = useRef(null);
  useEffect(() => {
    if (show) {
      inputRef.current.focus();
    }
  }, [show]);

  const onUpload = () => {
    var fileInp = document.querySelector('[type="file"]');
    fileInp.click();
  };
  const handleSubmit = () => {
    tweetTheTweet();
    onHide();
  };
  return (
    <Modal
      {...onTweet}
      tweet={tweet}
      show={show}
      onHide={onHide}
      aria-labelledby="contained-modal-title-vcenter"
      className={className}
    >
      <div className="close-btn-wrapper">
        {" "}
        <svg viewBox="0 0 24 24" onClick={onHide}>
          <path d="M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z"></path>
        </svg>
        <hr />
      </div>
      <Container fluid>
        <Row style={{ marginTop: "25px" }}>
          <UserImageAndInput
            tweet={tweet}
            onTweet={onTweet}
            inputRef={inputRef}
            height="200px"
          />
        </Row>
        <Container>
          <Row>
            <Col className="fileSelector">
              {" "}
              <input
                type="file"
                style={{ display: "none" }}
                onChange={onUpload}
              />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row style={{ paddingBottom: "10px" }}>
            <Col xs={1}></Col>
            <TweetOptions
              tweetModalIcons={tweetModalIcons}
              onUpload={onUpload}
            />
            <Col xs={2}>
              <Button
                className={style.tweet_btn}
                style={{ padding: "10px 20px" }}
                disabled={tweet.trim().length === 0}
                onClick={handleSubmit}
              >
                Tweet
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>
    </Modal>
  );
};
