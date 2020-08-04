import React from 'react'
import style from "./style.module.scss"
export const RoundButton = (props) => <div style={{ padding: props.padding }} className={style.tweet_btn} onClick={() => props.onModalShow()}>
    {props.label}
</div>