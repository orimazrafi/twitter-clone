import React, { useState } from "react";
import { Container, Row, Col, NavDropdown } from "react-bootstrap";
import { tweetOptionsIcons as tw } from "../../helpers";
import "./style.scss";
export const TweetsOptions = (props) => {
  const [tweetOptionsIcons, setTweetOptionsIcons] = useState(tw);
  const handleLike = () => {
    const duplicate = [...tw];
    if (duplicate[2].likeByMe) {
      removeLike(duplicate[2]);
    } else {
      addLike(duplicate[2]);
    }
    setTweetOptionsIcons(duplicate);
  };
  const addLike = (icon) => {
    icon.likeByMe = false;
    icon.numberOfLikes++;
  };
  const removeLike = (icon) => {
    icon.likeByMe = true;
    icon.numberOfLikes--;
  };
  const handleTweet = (index) => {
    switch (index) {
      case 0:
        props.onAddToTweet();
        break;
      case 2:
        return handleLike();
      default:
        break;
    }
  };
  return (
    <Container fluid className={"tweet_options_wrapper"}>
      <Row xs={12}>
        {tweetOptionsIcons?.map((icon, index) => (
          <Col key={Math.random()} onClick={() => handleTweet(index)}>
            {" "}
            {index === 1 ? (
              <DropDownRefresh
                icon={icon}
                firstRow={<Retweet icon={icon} text={"ReTweet"} />}
                secondRow={
                  <Retweet
                    icon={{
                      height: "30px",
                      svgPath:
                        "M22.132 7.653c0-.6-.234-1.166-.66-1.59l-3.535-3.536c-.85-.85-2.333-.85-3.182 0L3.417 13.865c-.323.323-.538.732-.63 1.25l-.534 5.816c-.02.223.06.442.217.6.14.142.332.22.53.22.023 0 .046 0 .068-.003l5.884-.544c.45-.082.86-.297 1.184-.62l11.337-11.34c.425-.424.66-.99.66-1.59zm-17.954 8.69l3.476 3.476-3.825.35.348-3.826zm5.628 2.447c-.282.283-.777.284-1.06 0L5.21 15.255c-.292-.292-.292-.77 0-1.06l8.398-8.398 4.596 4.596-8.398 8.397zM20.413 8.184l-1.15 1.15-4.595-4.597 1.15-1.15c.14-.14.33-.22.53-.22s.388.08.53.22l3.535 3.536c.142.142.22.33.22.53s-.08.39-.22.53z",
                    }}
                    text={"ReTweet with comment"}
                  />
                }
              />
            ) : (
              <svg
                viewBox="0 0 24 24"
                style={{
                  height: icon.height,
                }}
                className={icon.color}
              >
                <path d={icon.svgPath}></path>
                {icon.svgPath2 && <path d={icon.svgPath2}></path>}
              </svg>
            )}
            {icon.numberOfLikes && <span>{icon.numberOfLikes}</span>}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const DropDownRefresh = ({ icon, firstRow, secondRow }) => (
  <NavDropdown
    className={"sidebar-users-dropdown"}
    title={
      <svg
        viewBox="0 0 24 24"
        style={{
          height: icon.height,
        }}
        className={icon.color}
      >
        <path d={icon.svgPath}></path>
        {icon.svgPath2 && <path d={icon.svgPath2}></path>}
      </svg>
    }
    id="basic-nav-dropdown"
  >
    {firstRow}
    {secondRow}
  </NavDropdown>
);
const Retweet = ({ icon, text }) => (
  <WithHoverEffect>
    {" "}
    <svg
      viewBox="0 0 24 24"
      style={{
        padding: "5px",
        height: icon.height,
      }}
      // className={icon.color}
    >
      <path d={icon.svgPath}></path>
    </svg>
    <span>{text}</span>
  </WithHoverEffect>
);
const WithHoverEffect = (props) => (
  <div className={"grey-hover-background"}>{props.children}</div>
);
