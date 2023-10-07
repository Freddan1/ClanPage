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
          Box1
          <div className={BangerContent.videoContent}>
            <p>1v2 from ...</p>
            <div className={BangerContent.videoPlayer}>
            <ReactPlayer
              url="<https://www.youtube.com/watch?v=7sDY4m8KNLc>
              "
              width="560" height="515"
            />
            </div>
          </div>
        </div>
        <div className={BangerContentStyles.videoBox}>Box2</div>
        <div className={BangerContentStyles.videoBox}>Box3</div>
        <div className={BangerContentStyles.videoBox}>Box4</div>
        <div className={BangerContentStyles.videoBox}>Box5</div>
        <div className={BangerContentStyles.videoBox}>Box6</div>
      </div>
    </div>
  );
}

export default BangerContent;
