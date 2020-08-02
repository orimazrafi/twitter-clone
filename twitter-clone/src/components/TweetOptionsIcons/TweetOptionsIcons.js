import { Col } from "react-bootstrap";
import React from 'react'
import style from "./style.module.scss"
export const TweetOptionsIcons = ({ tweetModalIcons, onUpload }) => {
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
