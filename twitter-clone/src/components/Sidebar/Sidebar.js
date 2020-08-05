import React, { useState } from "react";
import { Container, Row, Col, Nav, NavDropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import style from "./style.module.scss";
import { sidebarList } from "../../helpers";
import { TweetModal } from "../TweetModal/TweetModal";
import { ImageAndEmail } from "../ImageAndEmail/ImageAndEmail";
import { RoundButton } from "../RoundButton/RoundButton";
import { DropDownRefresh } from './../DropDownRefresh/DropDownRefresh';
import { DropdownItem } from './../DropdownItem/DropdownItem';

const LinkHover = (props) => (
  <Col
    key={Math.random()}
    style={{ color: "rgba(29,161,242,1.00)" }}
    className={style.link_wrapper}
  >
    <Link
      to={props.item.link !== "/more" ? props.item.link : "/"}
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
              {sidebarList.map((item, index) => {
                return < div key={Math.random()}>
                  {item.label === "More" ? (
                    <MoreLink item={item} index={index} location={location} />
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
                    )}
                </div>
              })}
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
const MoreLink = ({ item, location }) =>
  <div style={{ marginLeft: "25px", marginBottom: "20px" }}>

    <DropDownRefresh
      icon={{
        height: "30px",
        svgPath: item.svgPath,
        marginRight: "15px",
        display: "inline-block"
      }}
      iconText={
        <span
          style={{ marginLeft: "21px", fontSize: "19px", color: "black", fontWeight: "bold" }}
          className={
            item.link === location.pathname
              ? style.active + " " + style.label
              : style.label
          }
        >
          {item.label}
        </span>
      }

      firstRow={<DropdownItem
        icon={{
          height: "30px",
          width: "150px",
          svgPath: "M12.003 23.274c-.083 0-.167-.014-.248-.042-.3-.105-.502-.39-.502-.708v-4.14c-2.08-.172-4.013-1.066-5.506-2.56-3.45-3.45-3.45-9.062 0-12.51s9.062-3.45 12.512 0c3.096 3.097 3.45 8.07.82 11.565l-6.49 8.112c-.146.182-.363.282-.587.282zm0-21.05c-1.882 0-3.763.717-5.195 2.15-2.864 2.863-2.864 7.524 0 10.39 1.388 1.387 3.233 2.15 5.195 2.15.414 0 .75.337.75.75v2.72l5.142-6.425c2.17-2.885 1.876-7.014-.696-9.587-1.434-1.43-3.316-2.148-5.197-2.148z",
          svgPath2: "M15.55 8.7h-7.1c-.413 0-.75-.337-.75-.75s.337-.75.75-.75h7.1c.413 0 .75.335.75.75s-.337.75-.75.75zm-3.05 3.238H8.45c-.413 0-.75-.336-.75-.75s.337-.75.75-.75h4.05c.414 0 .75.336.75.75s-.336.75-.75.75z"
        }}
        text="Topics"
        textLeftMargin="10px"
      />}
      secondRow={<DropdownItem
        icon={{
          height: "30px",
          width: "150px",
          svgPath: "M8.98 22.698c-.103 0-.205-.02-.302-.063-.31-.135-.49-.46-.44-.794l1.228-8.527H6.542c-.22 0-.43-.098-.573-.266-.144-.17-.204-.393-.167-.61L7.49 2.5c.062-.36.373-.625.74-.625h6.81c.23 0 .447.105.59.285.142.18.194.415.14.64l-1.446 6.075H19c.29 0 .553.166.678.428.124.262.087.57-.096.796L9.562 22.42c-.146.18-.362.276-.583.276zM7.43 11.812h2.903c.218 0 .425.095.567.26.142.164.206.382.175.598l-.966 6.7 7.313-8.995h-4.05c-.228 0-.445-.105-.588-.285-.142-.18-.194-.415-.14-.64l1.446-6.075H8.864L7.43 11.812z",
        }}
        text="Moments"
        textLeftMargin="10px"
      />}
      thirdRow={<DropdownItem
        icon={{
          height: "30px",
          width: "150px",
          svgPath: "M20.75 22H3.25C2.01 22 1 20.99 1 19.75V4.25C1 3.01 2.01 2 3.25 2h17.5C21.99 2 23 3.01 23 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM3.25 3.5c-.414 0-.75.337-.75.75v15.5c0 .413.336.75.75.75h17.5c.414 0 .75-.337.75-.75V4.25c0-.413-.336-.75-.75-.75H3.25z",
          svgPath2: "M16.758 6.982h-5.806c-.414 0-.75.336-.75.75s.336.75.75.75h3.995L6.92 16.508c-.292.293-.292.768 0 1.06.147.147.34.22.53.22s.385-.072.53-.22l8.027-8.025v3.995c0 .414.336.75.75.75s.75-.336.75-.75V7.732c0-.414-.335-.75-.75-.75z"
        }}
        text="Twitter Ads"
        textLeftMargin="10px"
      />}
      fourthRow={<DropdownItem
        icon={{
          height: "30px",
          width: "150px",
          svgPath: "M12 22c-.414 0-.75-.336-.75-.75V2.75c0-.414.336-.75.75-.75s.75.336.75.75v18.5c0 .414-.336.75-.75.75zm5.14 0c-.415 0-.75-.336-.75-.75V7.89c0-.415.335-.75.75-.75s.75.335.75.75v13.36c0 .414-.337.75-.75.75zM6.86 22c-.413 0-.75-.336-.75-.75V10.973c0-.414.337-.75.75-.75s.75.336.75.75V21.25c0 .414-.335.75-.75.75z",
        }}
        text="Analitycs"
        textLeftMargin="10px"
      />}

      fifthRow={<DropdownItem
        icon={{
          height: "30px",
          width: "150px",
          svgPath: "M12 8.21c-2.09 0-3.79 1.7-3.79 3.79s1.7 3.79 3.79 3.79 3.79-1.7 3.79-3.79-1.7-3.79-3.79-3.79zm0 6.08c-1.262 0-2.29-1.026-2.29-2.29S10.74 9.71 12 9.71s2.29 1.026 2.29 2.29-1.028 2.29-2.29 2.29z",
          svgPath2: "M12.36 22.375h-.722c-1.183 0-2.154-.888-2.262-2.064l-.014-.147c-.025-.287-.207-.533-.472-.644-.286-.12-.582-.065-.798.115l-.116.097c-.868.725-2.253.663-3.06-.14l-.51-.51c-.836-.84-.896-2.154-.14-3.06l.098-.118c.186-.222.23-.523.122-.787-.11-.272-.358-.454-.646-.48l-.15-.014c-1.18-.107-2.067-1.08-2.067-2.262v-.722c0-1.183.888-2.154 2.064-2.262l.156-.014c.285-.025.53-.207.642-.473.11-.27.065-.573-.12-.795l-.094-.116c-.757-.908-.698-2.223.137-3.06l.512-.512c.804-.804 2.188-.865 3.06-.14l.116.098c.218.184.528.23.79.122.27-.112.452-.358.477-.643l.014-.153c.107-1.18 1.08-2.066 2.262-2.066h.722c1.183 0 2.154.888 2.262 2.064l.014.156c.025.285.206.53.472.64.277.117.58.062.794-.117l.12-.102c.867-.723 2.254-.662 3.06.14l.51.512c.836.838.896 2.153.14 3.06l-.1.118c-.188.22-.234.522-.123.788.112.27.36.45.646.478l.152.014c1.18.107 2.067 1.08 2.067 2.262v.723c0 1.183-.888 2.154-2.064 2.262l-.155.014c-.284.024-.53.205-.64.47-.113.272-.067.574.117.795l.1.12c.756.905.696 2.22-.14 3.06l-.51.51c-.807.804-2.19.864-3.06.14l-.115-.096c-.217-.183-.53-.23-.79-.122-.273.114-.455.36-.48.646l-.014.15c-.107 1.173-1.08 2.06-2.262 2.06zm-3.773-4.42c.3 0 .593.06.87.175.79.328 1.324 1.054 1.4 1.896l.014.147c.037.4.367.7.77.7h.722c.4 0 .73-.3.768-.7l.014-.148c.076-.842.61-1.567 1.392-1.892.793-.33 1.696-.182 2.333.35l.113.094c.178.148.366.18.493.18.206 0 .4-.08.546-.227l.51-.51c.284-.284.305-.73.048-1.038l-.1-.12c-.542-.65-.677-1.54-.352-2.323.326-.79 1.052-1.32 1.894-1.397l.155-.014c.397-.037.7-.367.7-.77v-.722c0-.4-.303-.73-.702-.768l-.152-.014c-.846-.078-1.57-.61-1.895-1.393-.326-.788-.19-1.678.353-2.327l.1-.118c.257-.31.236-.756-.048-1.04l-.51-.51c-.146-.147-.34-.227-.546-.227-.127 0-.315.032-.492.18l-.12.1c-.634.528-1.55.67-2.322.354-.788-.327-1.32-1.052-1.397-1.896l-.014-.155c-.035-.397-.365-.7-.767-.7h-.723c-.4 0-.73.303-.768.702l-.014.152c-.076.843-.608 1.568-1.39 1.893-.787.326-1.693.183-2.33-.35l-.118-.096c-.18-.15-.368-.18-.495-.18-.206 0-.4.08-.546.226l-.512.51c-.282.284-.303.73-.046 1.038l.1.118c.54.653.677 1.544.352 2.325-.327.788-1.052 1.32-1.895 1.397l-.156.014c-.397.037-.7.367-.7.77v.722c0 .4.303.73.702.768l.15.014c.848.078 1.573.612 1.897 1.396.325.786.19 1.675-.353 2.325l-.096.115c-.26.31-.238.756.046 1.04l.51.51c.146.147.34.227.546.227.127 0 .315-.03.492-.18l.116-.096c.406-.336.923-.524 1.453-.524z",
        }}
        text="Settings and privacy"
        textLeftMargin="10px"
      />}
      sixthRow={<DropdownItem
        icon={{
          height: "30px",
          width: "150px",
          svgPath: "M12.025 22.75c-5.928 0-10.75-4.822-10.75-10.75S6.098 1.25 12.025 1.25 22.775 6.072 22.775 12s-4.822 10.75-10.75 10.75zm0-20c-5.1 0-9.25 4.15-9.25 9.25s4.15 9.25 9.25 9.25 9.25-4.15 9.25-9.25-4.15-9.25-9.25-9.25z",
          svgPath2: "M13.064 17.47c0-.616-.498-1.114-1.114-1.114-.616 0-1.114.498-1.114 1.114 0 .615.498 1.114 1.114 1.114.616 0 1.114-.5 1.114-1.114zm3.081-7.528c0-2.312-1.882-4.194-4.194-4.194-2.312 0-4.194 1.882-4.194 4.194 0 .414.336.75.75.75s.75-.336.75-.75c0-1.485 1.21-2.694 2.695-2.694 1.486 0 2.695 1.21 2.695 2.694 0 1.486-1.21 2.695-2.694 2.695-.413 0-.75.336-.75.75v1.137c0 .414.337.75.75.75s.75-.336.75-.75v-.463c1.955-.354 3.445-2.06 3.445-4.118z",
        }}
        text="Help center"
        textLeftMargin="10px"
      />}
      seventhRow={<DropdownItem
        icon={{
          height: "30px",
          width: "150px",
          svgPath: "M15.692 11.205l6.383-7.216c.45-.45.45-1.18 0-1.628-.45-.45-1.178-.45-1.627 0l-7.232 6.402s.782.106 1.595.93c.548.558.882 1.51.882 1.51z",
          svgPath2: "M17.45 22.28H3.673c-1.148 0-2.083-.946-2.083-2.11V7.926c0-1.165.934-2.112 2.082-2.112h5.836c.414 0 .75.336.75.75s-.336.75-.75.75H3.672c-.32 0-.583.274-.583.612V20.17c0 .336.26.61.582.61h13.78c.32 0 .583-.273.583-.61v-6.28c0-.415.336-.75.75-.75s.75.335.75.75v6.28c0 1.163-.934 2.11-2.084 2.11z",
          svgPath3: "M8.18 16.99c-.19.154-.476.032-.504-.21-.137-1.214-.234-4.053 1.483-5.943.908-1 3.02-1.52 4.475-.198s1.14 3.473.23 4.473c-2.07 2.15-3.428.058-5.686 1.878z",
        }}
        text="Display"
        textLeftMargin="10px"
      />}
    />
  </div>


