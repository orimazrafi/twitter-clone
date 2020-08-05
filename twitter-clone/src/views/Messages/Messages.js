import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CardTwoSideBorder } from './../../components/CardTwoSideBorder/CardTwoSideBorder';
import { PageHeader } from './../../components/PageHeader/PageHeader';
import { TweetSearchInput } from "../../components/TweetSearchInput/TweetSearchInput";
import { NothingToSee } from './../../components/NothingToSee/NothingToSee';

export const Messages = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <CardTwoSideBorder borderBottom="unset" padding="8px">
              <PageHeader
                padding="0 15px 10px 10px"
                headline="Messages"
                svgPath="M23.25 3.25h-2.425V.825c0-.414-.336-.75-.75-.75s-.75.336-.75.75V3.25H16.9c-.414 0-.75.336-.75.75s.336.75.75.75h2.425v2.425c0 .414.336.75.75.75s.75-.336.75-.75V4.75h2.425c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-3.175 6.876c-.414 0-.75.336-.75.75v8.078c0 .414-.337.75-.75.75H4.095c-.412 0-.75-.336-.75-.75V8.298l6.778 4.518c.368.246.79.37 1.213.37.422 0 .844-.124 1.212-.37l4.53-3.013c.336-.223.428-.676.204-1.012-.223-.332-.675-.425-1.012-.2l-4.53 3.014c-.246.162-.563.163-.808 0l-7.586-5.06V5.5c0-.414.337-.75.75-.75h9.094c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H4.096c-1.24 0-2.25 1.01-2.25 2.25v13.455c0 1.24 1.01 2.25 2.25 2.25h14.48c1.24 0 2.25-1.01 2.25-2.25v-8.078c0-.415-.337-.75-.75-.75z"
                height="25px"
                fill="rgba(29,161,242,1.00)"
              />
            </CardTwoSideBorder>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col>
            <CardTwoSideBorder borderBottom="unset" padding="10px 40px">
              <TweetSearchInput left="75px" top="21px" />
            </CardTwoSideBorder>
          </Col>
        </Row>
      </Container>
      <Container>
        <NothingToSee height="90vh"
          headline="Send a message, get a message"
          subText="Direct Messages are private conversations between you and other people on Twitter. Share Tweets, media, and more!"
          button="Start a conversation"
          buttonPadding="10px 15px"
        />
      </Container>
    </>
  );
};

