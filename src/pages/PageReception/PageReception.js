import { useRef as UseRef } from "react";
import videojs from "video.js";
import VideoJS from "../../VideoJS";
import styles from "./PageReception.module.css";
import { videoJsOptions, videoJsOptions1 } from "./reception.streams.js";

const PageReception = () => {
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
        <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        <VideoJS options={videoJsOptions1} onReady={handlePlayerReady} />
        <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
      </div>
      <div className={styles.main}>
        <VideoJS options={videoJsOptions1} onReady={handlePlayerReady} />
        <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        <VideoJS options={videoJsOptions1} onReady={handlePlayerReady} />
      </div>
      <div className={styles.main}>
        <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        <VideoJS options={videoJsOptions1} onReady={handlePlayerReady} />
        <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
      </div>
    </div>
  );
};

export default PageReception;