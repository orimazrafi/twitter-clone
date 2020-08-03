import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { TweetSearchInput } from "../../components/TweetSearchInput/TweetSearchInput";
import { CardWrpperWithWideBottomBorder } from "../../components/CardWrapperBorder/CardWrapperBorder";
import { SvgIcon } from "../../components/SvgIcon/SvgIcon";
import { TrendsForYou } from "../../components/TrendsForYou/TrendsForYou";
import { GeneralCard } from "../../components/GeneralCard/GeneralCard";
import { CardBorder } from './../../components/CardBorder/CardBorder';
import { CardTwoSideBorder } from './../../components/CardTwoSideBorder/CardTwoSideBorder';
import { whatIsHappeningArray } from "../../helpers";

export const Explore = () => {
  const WideCardBorder = (InnerComponent) => props =>
    <CardWrpperWithWideBottomBorder props={props}>
      <InnerComponent {...props} />
      <Container><Row style={{ borderBottom: "10px solid lightgray" }} /></Container>
    </CardWrpperWithWideBottomBorder>

  const SearchExplore = (props) => <div>
    <Container>
      <Row style={{ width: "650px", position: "fixed", padding: "20px 0", background: "white" }}>
        <Col style={{ width: "550px" }} >
          <TweetSearchInput {...props} top={"12px"} />
        </Col>
        <Col xs={1} className="mt-2">
          <SvgIcon
            height="25px" fill="rgb(29, 161, 242)" marginRight="15px"
            path={
              <path d="M12 8.21c-2.09 0-3.79 1.7-3.79 3.79s1.7 3.79 3.79 3.79 3.79-1.7 3.79-3.79-1.7-3.79-3.79-3.79zm0 6.08c-1.262 0-2.29-1.026-2.29-2.29S10.74 9.71 12 9.71s2.29 1.026 2.29 2.29-1.028 2.29-2.29 2.29z"></path>
            }
            path2={
              <path d="M12.36 22.375h-.722c-1.183 0-2.154-.888-2.262-2.064l-.014-.147c-.025-.287-.207-.533-.472-.644-.286-.12-.582-.065-.798.115l-.116.097c-.868.725-2.253.663-3.06-.14l-.51-.51c-.836-.84-.896-2.154-.14-3.06l.098-.118c.186-.222.23-.523.122-.787-.11-.272-.358-.454-.646-.48l-.15-.014c-1.18-.107-2.067-1.08-2.067-2.262v-.722c0-1.183.888-2.154 2.064-2.262l.156-.014c.285-.025.53-.207.642-.473.11-.27.065-.573-.12-.795l-.094-.116c-.757-.908-.698-2.223.137-3.06l.512-.512c.804-.804 2.188-.865 3.06-.14l.116.098c.218.184.528.23.79.122.27-.112.452-.358.477-.643l.014-.153c.107-1.18 1.08-2.066 2.262-2.066h.722c1.183 0 2.154.888 2.262 2.064l.014.156c.025.285.206.53.472.64.277.117.58.062.794-.117l.12-.102c.867-.723 2.254-.662 3.06.14l.51.512c.836.838.896 2.153.14 3.06l-.1.118c-.188.22-.234.522-.123.788.112.27.36.45.646.478l.152.014c1.18.107 2.067 1.08 2.067 2.262v.723c0 1.183-.888 2.154-2.064 2.262l-.155.014c-.284.024-.53.205-.64.47-.113.272-.067.574.117.795l.1.12c.756.905.696 2.22-.14 3.06l-.51.51c-.807.804-2.19.864-3.06.14l-.115-.096c-.217-.183-.53-.23-.79-.122-.273.114-.455.36-.48.646l-.014.15c-.107 1.173-1.08 2.06-2.262 2.06zm-3.773-4.42c.3 0 .593.06.87.175.79.328 1.324 1.054 1.4 1.896l.014.147c.037.4.367.7.77.7h.722c.4 0 .73-.3.768-.7l.014-.148c.076-.842.61-1.567 1.392-1.892.793-.33 1.696-.182 2.333.35l.113.094c.178.148.366.18.493.18.206 0 .4-.08.546-.227l.51-.51c.284-.284.305-.73.048-1.038l-.1-.12c-.542-.65-.677-1.54-.352-2.323.326-.79 1.052-1.32 1.894-1.397l.155-.014c.397-.037.7-.367.7-.77v-.722c0-.4-.303-.73-.702-.768l-.152-.014c-.846-.078-1.57-.61-1.895-1.393-.326-.788-.19-1.678.353-2.327l.1-.118c.257-.31.236-.756-.048-1.04l-.51-.51c-.146-.147-.34-.227-.546-.227-.127 0-.315.032-.492.18l-.12.1c-.634.528-1.55.67-2.322.354-.788-.327-1.32-1.052-1.397-1.896l-.014-.155c-.035-.397-.365-.7-.767-.7h-.723c-.4 0-.73.303-.768.702l-.014.152c-.076.843-.608 1.568-1.39 1.893-.787.326-1.693.183-2.33-.35l-.118-.096c-.18-.15-.368-.18-.495-.18-.206 0-.4.08-.546.226l-.512.51c-.282.284-.303.73-.046 1.038l.1.118c.54.653.677 1.544.352 2.325-.327.788-1.052 1.32-1.895 1.397l-.156.014c-.397.037-.7.367-.7.77v.722c0 .4.303.73.702.768l.15.014c.848.078 1.573.612 1.897 1.396.325.786.19 1.675-.353 2.325l-.096.115c-.26.31-.238.756.046 1.04l.51.51c.146.147.34.227.546.227.127 0 .315-.03.492-.18l.116-.096c.406-.336.923-.524 1.453-.524z"></path>
            }
          />
        </Col>
      </Row>
    </Container>
    <Image
      style={{ maxWidth: "100%", marginTop: "70px" }}
      src="https://pbs.twimg.com/semantic_core_img/1255568341697130496/CoyhRZev?format=jpg&name=900x900" alt="Corona" >
    </Image>
    <span style={{ position: "absolute", bottom: "36px", left: "27px", color: "white", fontWeight: "bold" }}>COVID-19</span>
    <h4 style={{ position: "absolute", bottom: "3px", left: "25px", color: "white", fontWeight: "bold" }}>COVID-19: Updates for the US</h4>
  </div >
  const SearchExploreWrapper = WideCardBorder(SearchExplore)
  const TrendsForYouWithWideBorder = WideCardBorder(TrendsForYou)
  return (
    <Container fluid>
      <Row>
        <Col><SearchExploreWrapper
        /></Col>
      </Row>
      <TrendsForYouWithWideBorder
        backgroundColor="white"
        borderRadius="unset"
        borderRightAndLeft="1px solid lightgray"

        imgTrend={
          <Container>
            <Row style={{
              borderRadius: "25px",
              marginRight: "0",
              border: "1px solid lightgray"
            }}>
              <Image
                style={{ maxWidth: "200px", borderRadius: "25px 0 0 25px" }}

                src={"https://pbs.twimg.com/card_img/1290143018603802624/fBNAyI4E?format=jpg&name=360x360"}
              />
              <Col>
                <p style={{ fontSize: "15px", padding: "5px", marginBottom: "0" }}>
                  The people that Covid-19 has cut off from home
              </p>
                <p style={{
                  fontSize: "13px", color: "gray", marginBottom: "0"
                }}>Chinese students, Mongolian tourists and Palestinians from Gaza are still stranded</p>
                <span style={{ fontSize: "13px", color: "gray" }}>
                  <SvgIcon
                    height="20px" fill="gray"
                    path={
                      <path d="M11.96 14.945c-.067 0-.136-.01-.203-.027-1.13-.318-2.097-.986-2.795-1.932-.832-1.125-1.176-2.508-.968-3.893s.942-2.605 2.068-3.438l3.53-2.608c2.322-1.716 5.61-1.224 7.33 1.1.83 1.127 1.175 2.51.967 3.895s-.943 2.605-2.07 3.438l-1.48 1.094c-.333.246-.804.175-1.05-.158-.246-.334-.176-.804.158-1.05l1.48-1.095c.803-.592 1.327-1.463 1.476-2.45.148-.988-.098-1.975-.69-2.778-1.225-1.656-3.572-2.01-5.23-.784l-3.53 2.608c-.802.593-1.326 1.464-1.475 2.45-.15.99.097 1.975.69 2.778.498.675 1.187 1.15 1.992 1.377.4.114.633.528.52.928-.092.33-.394.547-.722.547z"></path>
                    }
                    path2={
                      <path d="M7.27 22.054c-1.61 0-3.197-.735-4.225-2.125-.832-1.127-1.176-2.51-.968-3.894s.943-2.605 2.07-3.438l1.478-1.094c.334-.245.805-.175 1.05.158s.177.804-.157 1.05l-1.48 1.095c-.803.593-1.326 1.464-1.475 2.45-.148.99.097 1.975.69 2.778 1.225 1.657 3.57 2.01 5.23.785l3.528-2.608c1.658-1.225 2.01-3.57.785-5.23-.498-.674-1.187-1.15-1.992-1.376-.4-.113-.633-.527-.52-.927.112-.4.528-.63.926-.522 1.13.318 2.096.986 2.794 1.932 1.717 2.324 1.224 5.612-1.1 7.33l-3.53 2.608c-.933.693-2.023 1.026-3.105 1.026z"></path>
                    }
                  />
              theguardian.com
              </span>
              </Col>
            </Row>
          </Container>

        }
      />
      <CardTwoSideBorder>
        <GeneralCard headline={<p style={{ fontWeight: "800", fontSize: "19px" }}>What’s happening</p>} />
      </CardTwoSideBorder>

      {whatIsHappeningArray.map(happening =>
        <CardBorder key={Math.random()}>
          <GeneralCard
            headline={<NewsPlusImage
              headline={happening.headline}
              when={happening.when}
              paragraph={happening.paragraph}
              paragraphPic={happening.paragraphPic}
              pic={happening.pic}
            />}
          />
        </CardBorder>)}
      <CardTwoSideBorder>
        <GeneralCard headline={
          <Col style={{ marginBottom: "50px" }}>
            <a href="show-more">show more</a>
          </Col>
        }

        />
      </CardTwoSideBorder>
    </Container>
  );
};
const NewsPlusImage = (props) => <Row style={{ padding: "0 0 10px 0" }}>
  <Col xs={9}>
    <span style={{ fontSize: "13px", color: "gray" }}>
      {props.headline} · {props.when}
    </span>
    <p style={{ fontSize: "15px", fontWeight: "bold" }}>
      {props.paragraph}
      {props.paragraphPic ?
        <Image
          src={props.paragraphPic}
          alt={props.headline}
          style={{ marginLeft: "10px" }}
          height="20"
          width="20"
        />
        : null}
    </p>
  </Col>
  <Col><Image style={{ borderRadius: "15px", width: "85px", marginLeft: "25px", height: "85px" }} alt={props.headline}
    src={props.pic} />
  </Col>
</Row>