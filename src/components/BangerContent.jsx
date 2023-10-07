import React from "react";
import BangerContentStyles from "./BangerContent.module.css";
import ReactPlayer from "react-player";
function BangerContent() {
  return (
    <div className={BangerContentStyles.wrapper} id="bangerContent">
      <div className={BangerContentStyles.heading}>
        Banger Content
        <br />
      </div>
      <div className={BangerContentStyles.videoList}>
        <div className={BangerContentStyles.videoBox}>
          <div className={BangerContent.videoContent}>
            <h3>xDfrom ...</h3>
            <div className={BangerContent.videoPlayer}>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=gVBOEK-nn1U
              "
                width="100%"
                height="350px"
              />
            </div>
          </div>
        </div>
        <div className={BangerContentStyles.videoBox}>
          <div className={BangerContent.videoContent}>
            <h3>xD ...</h3>
            <div className={BangerContent.videoPlayer}>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=koOXKjkdQUw
              "
                width="100%"
                height="350px"
              />
            </div>
          </div>
        </div>
        <div className={BangerContentStyles.videoBox}>
          <div className={BangerContent.videoContent}>
            <h3>xD ...</h3>
            <div className={BangerContent.videoPlayer}>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=lP17j99V8_c
              "
                width="100%"
                height="350px"
              />
            </div>
          </div>
        </div>
        <div className={BangerContentStyles.videoBox}>
          <div className={BangerContent.videoContent}>
            <h3>xD ...</h3>
            <div className={BangerContent.videoPlayer}>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=WEIM1lb-0WY
              "
                width="100%"
                height="350px"
              />
            </div>
          </div>
        </div>
        <div className={BangerContentStyles.videoBox}>
          <div className={BangerContent.videoContent}>
            <h3>xD ...</h3>
            <div className={BangerContent.videoPlayer}>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=gVBOEK-nn1U
              "
                width="100%"
                height="300px"
              />
            </div>
          </div>
        </div>
        <div className={BangerContentStyles.videoBox}>
          <div className={BangerContent.videoContent}>
            <h3>xD ...</h3>
            <div className={BangerContent.videoPlayer}>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=gVBOEK-nn1U
              "
                width="100%"
                height="350px"
              />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default BangerContent;
