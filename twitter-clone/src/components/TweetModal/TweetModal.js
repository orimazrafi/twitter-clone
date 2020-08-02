import React, { useEffect, useRef } from "react";
import { Modal } from "react-bootstrap";
import { tweetModalIcons, tweetsArray } from "../../helpers";
import { TweetSubmit } from './../TweetSubmit/TweetSubmit';
export const TweetModal = (props) => {
  const {
    onHide,
    onTweet,
    tweet,
    show,
    className,
    tweetTheTweet,
    anotherTweet,
  } = props;
  const inputRef = useRef(null);
  useEffect(() => {
    if (show) {
      inputRef.current.focus();
    }
  }, [show]);

  const onUpload = () => {
    var fileInp = document.querySelector('[type="file"]');
    fileInp.click();
  };
  const handleSubmit = () => {
    tweetTheTweet();
    onHide();
  };
  return (
    <Modal
      {...onTweet}
      tweet={tweet}
      show={show}
      onHide={onHide}
      aria-labelledby="contained-modal-title-vcenter"
      className={className}
    >

      <TweetSubmit
        anotherTweet={anotherTweet}
        handleSubmit={handleSubmit}
        onUpload={onUpload}
        tweetModalIcons={tweetModalIcons}
        inputRef={inputRef}
        onTweet={onTweet}
        tweet={tweet}
        tweetsArray={tweetsArray}
        height="200px"
        pic="https://pbs.twimg.com/profile_images/1086330360852492295/PExQPH9a_bigger.jpg"
        header={<div className="close-btn-wrapper">
          {" "}
          <svg viewBox="0 0 24 24" onClick={onHide}>
            <path d="M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z"></path>
          </svg>
          <hr />
        </div>} />
    </Modal>
  );
};
