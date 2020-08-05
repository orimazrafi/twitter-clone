import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CardTwoSideBorder } from './../../components/CardTwoSideBorder/CardTwoSideBorder';
import { PageHeader } from './../../components/PageHeader/PageHeader';
import { NothingToSee } from './../../components/NothingToSee/NothingToSee';
import { SvgIcon } from "../../components/SvgIcon/SvgIcon";

export const Lists = () => {
  return (<>
    <Container fluid>
      <Row>
        <Col>
          <CardTwoSideBorder borderBottom="unset" padding="8px">
            <PageHeader
              padding="0 0 0 40px"
              marginH4="0"
              anotherSvg={
                <SvgIcon
                  position="absolute"
                  top="25px"
                  left="27px"
                  height="25px"
                  fill="rgba(29,161,242,1.00)"
                  path={
                    <path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path>
                  }


                />
              }
              nextSvg={<div style={{ marginLeft: "auto" }}>

                <SvgIcon
                  marginRight="5px"
                  height="25px"
                  fill="rgba(29,161,242,1.00)"
                  marginBottom="-25px"
                  path={
                    <path d="M23.25 3.25h-2.425V.825c0-.414-.336-.75-.75-.75s-.75.336-.75.75V3.25H16.9c-.414 0-.75.336-.75.75s.336.75.75.75h2.425v2.425c0 .414.336.75.75.75s.75-.336.75-.75V4.75h2.425c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zM18.575 22H4.25C3.01 22 2 20.99 2 19.75V5.5c0-1.24 1.01-2.25 2.25-2.25h8.947c.414 0 .75.336.75.75s-.336.75-.75.75H4.25c-.413 0-.75.336-.75.75v14.25c0 .414.337.75.75.75h14.325c.413 0 .75-.336.75-.75v-8.872c0-.414.336-.75.75-.75s.75.336.75.75v8.872c0 1.24-1.01 2.25-2.25 2.25z"></path>
                  }
                  path2={
                    <path d="M16.078 9.583H6.673c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h9.405c.414 0 .75.336.75.75s-.336.75-.75.75zm0 3.867H6.673c-.414 0-.75-.337-.75-.75s.336-.75.75-.75h9.405c.414 0 .75.335.75.75s-.336.75-.75.75zm-4.703 3.866H6.673c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4.702c.414 0 .75.336.75.75s-.336.75-.75.75z"></path>
                  }


                />
              </div>

              }
              headline="Lists"
              marginBottom="-25px"

              svgPath="M19.39 14.882c-1.58 0-2.862-1.283-2.862-2.86s1.283-2.862 2.86-2.862 2.862 1.283 2.862 2.86-1.284 2.862-2.86 2.862zm0-4.223c-.75 0-1.362.61-1.362 1.36s.61 1.36 1.36 1.36 1.362-.61 1.362-1.36-.61-1.36-1.36-1.36zM12 14.882c-1.578 0-2.86-1.283-2.86-2.86S10.42 9.158 12 9.158s2.86 1.282 2.86 2.86S13.578 14.88 12 14.88zm0-4.223c-.75 0-1.36.61-1.36 1.36s.61 1.362 1.36 1.362 1.36-.61 1.36-1.36-.61-1.363-1.36-1.363zm-7.39 4.223c-1.577 0-2.86-1.283-2.86-2.86S3.034 9.16 4.61 9.16s2.862 1.283 2.862 2.86-1.283 2.862-2.86 2.862zm0-4.223c-.75 0-1.36.61-1.36 1.36s.61 1.36 1.36 1.36 1.362-.61 1.362-1.36-.61-1.36-1.36-1.36z"
              height="25px"
              fill="rgba(29,161,242,1.00)"
              subText={
                <Row style={{ padding: "0 15px 0 40px" }}>
                  <p style={{ fontWeight: "15px", color: "gray", marginBottom: "0" }}>@OMarzafi</p>
                </Row>}
            />
          </CardTwoSideBorder></Col>
      </Row>
    </Container>
    <Container fluid>
      <Row>
        <Col>
          <CardTwoSideBorder borderBottom="unset" padding="8px">
            <PageHeader
              headline="Pinned"
              padding="0"
            />
          </CardTwoSideBorder></Col>
      </Row>
      <NothingToSee
        subText="Nothing to see here yet — pin up to five of your favorite Lists to access them quickly."
        borderTop="unset"
      />
      <div style={{ borderBottom: "10px solid lightgray" }} />
    </Container>
    <Container fluid>
      <Row>
        <Col>
          <CardTwoSideBorder borderBottom="unset" padding="8px">
            <PageHeader
              headline="Your List"
              padding="0"
            />
          </CardTwoSideBorder></Col>
      </Row>
      <NothingToSee
        height="90vh"
        borderTop="unset"

        headline="You haven’t created any Lists yet"
        subText="When you do, it’ll show up here."
        button="Create a List"
        buttonPadding="10px 15px"
      />
      {/* <div style={{ borderBottom: "10px solid lightgray" }} /> */}
    </Container>
  </>
  );
};
