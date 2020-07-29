import React from 'react'
import style from "./style.module.scss"
import { ImageAndEmail } from '../ImageAndEmail/ImageAndEmail'
import { Button } from 'react-bootstrap'
import { youMightLike } from "../../helpers"
import { Link } from 'react-router-dom'
export const Trends = () => {
    return (<div className={
        style.trends_wrapper
    }>
        <TweetSearch />
        <YouMightLike />
    </div>)

}
const TweetSearch = () => <>    <input type="text" placeholder="Search Twitter" className={
    style.serach_tweet_input
}

/> <svg viewBox="0 0 24 24" style={
    {
        height: "20px", position: "absolute", top: "27px", left: "28px", fill: "currentColor"
    }
}

><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
</>
const YouMightLike = () =>
    <div style={{ margin: "20px 0" }} >
        <EdgeOfMoghtLike borderRadius="25px 25px 0 0"
            toRender={<div style={{ fontWeight: "bold", fontSize: "19px", marginLeft: "15px" }}>You Might Like</div>}
        />
        {youMightLike.map(people =>
            <BackgroundWrapper key={Math.random()} withHover="withHover">
                <ImageAndEmail img={people.img} height="49" width="49"
                    closerRows="-5px"
                    userName={people.userName} fullName={people.fullName}
                    followButton={<Button variant="outline-primary" style={{ padding: "5px 20px", float: "right", borderRadius: "25px", fontWeight: "bold" }}>Follow</Button>}
                />
            </BackgroundWrapper>
        )}
        <EdgeOfMoghtLike borderRadius="0 0 25px 25px "
            withHover="withHover"
            toRender={<Link to="/show-more" style={{ marginLeft: "20px", fontSize: "18px" }}> show more</Link>} />
    </div>
const BackgroundWrapper = (props) =>
    <div className={style.backgroundWrapper} >
        <div
            className={props.withHover ? style.with_hover : style.with_out_hover}
            style={{
                backgroundColor: "rgb(245, 248, 250)",
                padding: "15px 0",
                borderRadius: props.borderRadius,
                borderBottom: props.border
            }}>{props.children}</div>
    </div>
const EdgeOfMoghtLike = (props) => <BackgroundWrapper borderRadius={props.borderRadius} border={"1px solid lightgray"} withHover={props.withHover}>
    {props.toRender}
</BackgroundWrapper>
const TrendsForYou = () => <div></div>
