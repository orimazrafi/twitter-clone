import React from 'react'
import { DropDownRefresh } from './../DropDownRefresh/DropDownRefresh';
import { DropdownItem } from './../DropdownItem/DropdownItem';
import { Link } from 'react-router-dom';
import style from "./style.module.scss"
export const TrendsForYou = (props) => <div>
    <EdgeOfMightLike
        border={props.border}
        borderRightAndLeft={props.borderRightAndLeft}
        backgroundColor={props.backgroundColor}
        borderRadius={props.borderRadius ? props.borderRadius : "25px 25px 0 0"}
        toRender={
            <div style={{ display: "flex" }}>
                <div style={{ fontWeight: "bold", fontSize: "19px", marginLeft: "15px" }}>Trends For Your</div>
                <div style={{ marginLeft: "auto" }}>
                    {props.settingsIcon}

                </div>
            </div>
        }
    />
    < EdgeOfMightLike
        backgroundColor={props.backgroundColor}
        border={props.border}
        borderRightAndLeft={props.borderRightAndLeft}


        withHover="withHover"
        toRender={
            <TrendsForYouReport
                where="Trending in Israel"
                headline="תשעה באב"
                tweets="1,979 tweets"
                imgTrend={props.imgTrend}
            />
        } />
    < EdgeOfMightLike
        borderRightAndLeft={props.borderRightAndLeft}

        backgroundColor={props.backgroundColor}

        withHover="withHover"
        toRender={
            <TrendsForYouReport
                where="Trending in Israel"
                headline="#TishaBav"
                tweets="2,209 tweets"
            />
        } />
    < EdgeOfMightLike
        borderRightAndLeft={props.borderRightAndLeft}

        //  borderRadius="0 0 25px 25px "
        borderRadius={props.borderRadius ? props.borderRadius : "25px 25px 0 0"}

        withHover="withHover"
        backgroundColor={props.backgroundColor}

        toRender={<Link to="/show-more" style={{ marginLeft: "20px", fontSize: "18px" }}> show more</Link >} />
</div >
const EdgeOfMightLike = (props) => <BackgroundWrapper
    backgroundColor={props.backgroundColor}
    borderRightAndLeft={props.borderRightAndLeft}
    borderRadius={props.borderRadius} border={"1px solid lightgray"} withHover={props.withHover}>
    {props.toRender}
</BackgroundWrapper>
const TrendsForYouReport = (props) => <div style={{ marginLeft: "15px" }}>
    <div style={{ display: "flex" }}>
        <div style={{ color: "rgb(101, 119, 134)", fontSize: "13px", fontWeight: "300" }}>
            {props.where}
        </div>
        <DropDownWithSmiley />
    </div>

    {/* <div style={{ fontSize: "20px", fontWeight: "bold", textAlign: "end", marginRight: "15px" }}> */}
    {props.headline}
    {/* </div> */}
    <div style={{ fontSize: "20px", fontWeight: "bold" }}>
        {props.imgTrend}
    </div>
    <div syle={{ color: "rgb(101, 119, 134)", fontSize: "13px", fontWeight: "300" }}>
        {props.tweets}
    </div>
</div >
const DropDownWithSmiley = () => <DropDownRefresh
    icon={{
        height: "15px",
        svgPath: "M20.207 8.147c-.39-.39-1.023-.39-1.414 0L12 14.94 5.207 8.147c-.39-.39-1.023-.39-1.414 0-.39.39-.39 1.023 0 1.414l7.5 7.5c.195.196.45.294.707.294s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.022 0-1.413z",
        marginLeft: "auto",
        marginRight: "15px",
    }}
    firstRow={<DropdownItem
        icon={{
            height: "30px",
            svgPath: "M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z",
            svgPath2: "M12 13.415c1.892 0 3.633.95 4.656 2.544.224.348.123.81-.226 1.035-.348.226-.812.124-1.036-.226-.747-1.162-2.016-1.855-3.395-1.855s-2.648.693-3.396 1.854c-.224.35-.688.45-1.036.225-.35-.224-.45-.688-.226-1.036 1.025-1.594 2.766-2.545 4.658-2.545zm4.216-3.957c0 .816-.662 1.478-1.478 1.478s-1.478-.66-1.478-1.478c0-.817.662-1.478 1.478-1.478s1.478.66 1.478 1.478zm-5.476 0c0 .816-.662 1.478-1.478 1.478s-1.478-.66-1.478-1.478c0-.817.662-1.478 1.478-1.478.817 0 1.478.66 1.478 1.478z",
            width: "300px"
        }} text={"This trend is spam"} />}
    secondRow={<DropdownItem
        icon={{
            height: "30px",
            svgPath: "M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z",
            svgPath2: "M12 13.415c1.892 0 3.633.95 4.656 2.544.224.348.123.81-.226 1.035-.348.226-.812.124-1.036-.226-.747-1.162-2.016-1.855-3.395-1.855s-2.648.693-3.396 1.854c-.224.35-.688.45-1.036.225-.35-.224-.45-.688-.226-1.036 1.025-1.594 2.766-2.545 4.658-2.545zm4.216-3.957c0 .816-.662 1.478-1.478 1.478s-1.478-.66-1.478-1.478c0-.817.662-1.478 1.478-1.478s1.478.66 1.478 1.478zm-5.476 0c0 .816-.662 1.478-1.478 1.478s-1.478-.66-1.478-1.478c0-.817.662-1.478 1.478-1.478.817 0 1.478.66 1.478 1.478z",
            width: "300px"

        }}
        text={"This trend is abusive or harmful"} />}
    thirdRow={<DropdownItem
        icon={{
            height: "30px",
            svgPath: "M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z",
            svgPath2: "M12 13.415c1.892 0 3.633.95 4.656 2.544.224.348.123.81-.226 1.035-.348.226-.812.124-1.036-.226-.747-1.162-2.016-1.855-3.395-1.855s-2.648.693-3.396 1.854c-.224.35-.688.45-1.036.225-.35-.224-.45-.688-.226-1.036 1.025-1.594 2.766-2.545 4.658-2.545zm4.216-3.957c0 .816-.662 1.478-1.478 1.478s-1.478-.66-1.478-1.478c0-.817.662-1.478 1.478-1.478s1.478.66 1.478 1.478zm-5.476 0c0 .816-.662 1.478-1.478 1.478s-1.478-.66-1.478-1.478c0-.817.662-1.478 1.478-1.478.817 0 1.478.66 1.478 1.478z",
            width: "300px"

        }} text={"This trend is a duplicate"} />}
    fourthRow={<DropdownItem
        icon={{
            height: "30px",
            svgPath: "M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z",
            svgPath2: "M12 13.415c1.892 0 3.633.95 4.656 2.544.224.348.123.81-.226 1.035-.348.226-.812.124-1.036-.226-.747-1.162-2.016-1.855-3.395-1.855s-2.648.693-3.396 1.854c-.224.35-.688.45-1.036.225-.35-.224-.45-.688-.226-1.036 1.025-1.594 2.766-2.545 4.658-2.545zm4.216-3.957c0 .816-.662 1.478-1.478 1.478s-1.478-.66-1.478-1.478c0-.817.662-1.478 1.478-1.478s1.478.66 1.478 1.478zm-5.476 0c0 .816-.662 1.478-1.478 1.478s-1.478-.66-1.478-1.478c0-.817.662-1.478 1.478-1.478.817 0 1.478.66 1.478 1.478z",
            width: "300px"

        }} text={"This trend is a low quality"} />}
/>
const BackgroundWrapper = (props) =>
    <div className={style.backgroundWrapper} >
        <div
            className={props.withHover ? style.with_hover : style.with_out_hover}
            style={{
                backgroundColor: props.backgroundColor ? props.backgroundColor : "rgb(245, 248, 250)",
                padding: "15px 0",
                borderRadius: props.borderRadius,
                borderBottom: props.border,
                borderRight: props.borderRightAndLeft,
                borderLeft: props.borderRightAndLeft,
            }}>{props.children}</div>
    </div>
