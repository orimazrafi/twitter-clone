import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CardTwoSideBorder } from './../../components/CardTwoSideBorder/CardTwoSideBorder';
import { PageHeader } from './../../components/PageHeader/PageHeader';
import { NothingToSee } from './../../components/NothingToSee/NothingToSee';

export const BookMarks = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <CardTwoSideBorder borderBottom="unset" padding="8px">
            <PageHeader
              padding="0 0  0 10px"
              marginH4="0"
              headline="BookMarks"
              subText={
                <Row style={{ padding: "0 15px 0 10px" }}>
                  <p style={{ fontWeight: "15px", color: "gray", marginBottom: "0" }}>@OMarzafi</p>
                </Row>}
            />
          </CardTwoSideBorder></Col>
      </Row>
      <NothingToSee
        height="90vh"
        borderTop="0"
        headline="You haven’t added any Tweets to your Bookmarks yet"
        subText="When you do, they’ll show up here."
      />
    </Container>
  );
};
