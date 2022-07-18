import React, { useRef as UseRef } from "react";
import videojs from "video.js";
import VideoJS from "../../VideoJS";
import styles from "./PageEcoGarden.module.css";
import {
  videoJsOptions1,
  videoJsOptions2,
  videoJsOptions3,
  videoJsOptions4,
  videoJsOptions5,
  videoJsOptions6,
  videoJsOptions7,
  videoJsOptions8,
  videoJsOptions9,
} from "./ecogarden.streams.js";

const PageEcoGarden = () => {
  const playerRef = UseRef(null);

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  return (
    <div>
      <div className={styles.main}>
        <VideoJS options={videoJsOptions1} onReady={handlePlayerReady} />
        <VideoJS options={videoJsOptions2} onReady={handlePlayerReady} />
        <VideoJS options={videoJsOptions3} onReady={handlePlayerReady} />
      </div>
      <div className={styles.main}>
        <VideoJS options={videoJsOptions4} onReady={handlePlayerReady} />
        <VideoJS options={videoJsOptions5} onReady={handlePlayerReady} />
        <VideoJS options={videoJsOptions6} onReady={handlePlayerReady} />
      </div>
      <div className={styles.main}>
        <VideoJS options={videoJsOptions7} onReady={handlePlayerReady} />
        <VideoJS options={videoJsOptions8} onReady={handlePlayerReady} />
        <VideoJS options={videoJsOptions9} onReady={handlePlayerReady} />
      </div>
    </div>
  );
};

export default PageEcoGarden;
