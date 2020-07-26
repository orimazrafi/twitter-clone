import React, { useState } from "react";
import { Container, Row, Col, NavDropdown } from "react-bootstrap";
import { tweetOptionsIcons as tw, fullHeart, emptyHeart } from "../../helpers";
import "./style.scss";
const envelopeIcon = "M19.25 3.018H4.75C3.233 3.018 2 4.252 2 5.77v12.495c0 1.518 1.233 2.753 2.75 2.753h14.5c1.517 0 2.75-1.235 2.75-2.753V5.77c0-1.518-1.233-2.752-2.75-2.752zm-14.5 1.5h14.5c.69 0 1.25.56 1.25 1.25v.714l-8.05 5.367c-.273.18-.626.182-.9-.002L3.5 6.482v-.714c0-.69.56-1.25 1.25-1.25zm14.5 14.998H4.75c-.69 0-1.25-.56-1.25-1.25V8.24l7.24 4.83c.383.256.822.384 1.26.384.44 0 .877-.128 1.26-.383l7.24-4.83v10.022c0 .69-.56 1.25-1.25 1.25z"
const bookmarkIcon = "M23.074 3.35H20.65V.927c0-.414-.337-.75-.75-.75s-.75.336-.75.75V3.35h-2.426c-.414 0-.75.337-.75.75s.336.75.75.75h2.425v2.426c0 .414.335.75.75.75s.75-.336.75-.75V4.85h2.424c.414 0 .75-.335.75-.75s-.336-.75-.75-.75zM19.9 10.744c-.415 0-.75.336-.75.75v9.782l-6.71-4.883c-.13-.095-.285-.143-.44-.143s-.31.048-.44.144l-6.71 4.883V5.6c0-.412.337-.75.75-.75h6.902c.414 0 .75-.335.75-.75s-.336-.75-.75-.75h-6.9c-1.242 0-2.25 1.01-2.25 2.25v17.15c0 .282.157.54.41.668.25.13.553.104.78-.062L12 17.928l7.458 5.43c.13.094.286.143.44.143.117 0 .234-.026.34-.08.252-.13.41-.387.41-.67V11.495c0-.414-.335-.75-.75-.75z"
const firstLinkIcon = "M11.96 14.945c-.067 0-.136-.01-.203-.027-1.13-.318-2.097-.986-2.795-1.932-.832-1.125-1.176-2.508-.968-3.893s.942-2.605 2.068-3.438l3.53-2.608c2.322-1.716 5.61-1.224 7.33 1.1.83 1.127 1.175 2.51.967 3.895s-.943 2.605-2.07 3.438l-1.48 1.094c-.333.246-.804.175-1.05-.158-.246-.334-.176-.804.158-1.05l1.48-1.095c.803-.592 1.327-1.463 1.476-2.45.148-.988-.098-1.975-.69-2.778-1.225-1.656-3.572-2.01-5.23-.784l-3.53 2.608c-.802.593-1.326 1.464-1.475 2.45-.15.99.097 1.975.69 2.778.498.675 1.187 1.15 1.992 1.377.4.114.633.528.52.928-.092.33-.394.547-.722.547z"
const secondLinkIcon = "M7.27 22.054c-1.61 0-3.197-.735-4.225-2.125-.832-1.127-1.176-2.51-.968-3.894s.943-2.605 2.07-3.438l1.478-1.094c.334-.245.805-.175 1.05.158s.177.804-.157 1.05l-1.48 1.095c-.803.593-1.326 1.464-1.475 2.45-.148.99.097 1.975.69 2.778 1.225 1.657 3.57 2.01 5.23.785l3.528-2.608c1.658-1.225 2.01-3.57.785-5.23-.498-.674-1.187-1.15-1.992-1.376-.4-.113-.633-.527-.52-.927.112-.4.528-.63.926-.522 1.13.318 2.096.986 2.794 1.932 1.717 2.324 1.224 5.612-1.1 7.33l-3.53 2.608c-.933.693-2.023 1.026-3.105 1.026z"
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
    icon.likeByMe = true;
    icon.svgPath = fullHeart
    icon.numberOfLikes++;
  };
  const removeLike = (icon) => {
    icon.likeByMe = false;
    icon.svgPath = emptyHeart
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
            {index === 1 && (
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
              />)}
            {index === 3 && (
              <DropDownRefresh
                icon={icon}
                firstRow={<Retweet icon={{ height: "30px", svgPath: envelopeIcon }} text={"Send via Direct Message"} />}
                secondRow={
                  <Retweet
                    icon={{
                      height: "30px",
                      svgPath:
                        bookmarkIcon,
                    }}
                    text={"Add Tweet to Bookmarks"}
                  />
                }
                thirdRow={
                  <Retweet
                    icon={{
                      height: "30px",
                      svgPath:
                        firstLinkIcon,
                      svgPath2:
                        secondLinkIcon,
                    }}
                    text={"Copy link to Tweet"}
                  />
                }
              />)}
            {(index === 0 || index === 2 || index === 4) &&
              <>
                <svg
                  viewBox="0 0 24 24"
                  style={{
                    height: icon.height,
                    fill: icon.likeByMe ? "rgb(224, 36, 94)" : "currentcolor"
                  }}
                  className={icon.color}
                >
                  <path d={icon.svgPath}></path>
                  {icon.svgPath2 && <path d={icon.svgPath2}></path>}
                </svg>

                {icon.numberOfLikes && <span style={{ color: icon.likeByMe ? "rgb(224, 36, 94)" : "currentcolor" }}>{icon.numberOfLikes}</span>}
              </>}
          </Col>
        ))}
      </Row>
    </Container >
  );
};

const DropDownRefresh = ({ icon, firstRow, secondRow, thirdRow }) => (
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
    {thirdRow}
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
    >
      <path d={icon.svgPath}></path>
      {icon.svgPath2 &&
        <path d={icon.svgPath2}></path>
      }
    </svg>
    <span>{text}</span>
  </WithHoverEffect>
);
const WithHoverEffect = (props) => (
  <div className={"grey-hover-background"}>{props.children}</div>
);