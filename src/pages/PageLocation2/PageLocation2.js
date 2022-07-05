import { useRef } from "react";
import videojs from "video.js";
import VideoJS from "../../VideoJS";
import styles from "./PageLocation2.module.css";

const pageLocation2 = () => {
  const playerRef = useRef(null);

  const videoJsOptions = {
    height: 400,
    width: 600,
    controls: true,
    sources: [
      {
        src: "http://localhost:8083/stream/pattern/channel/0/hls/live/index.m3u8",
        type: "application/x-mpegURL",
      },
    ],
  };

  const videoJsOptions2 = {
    height: 400,
    width: 600,
    controls: true,
    sources: [
      {
        src: "http://localhost:8083/stream/pattern/channel/1/hls/live/index.m3u8",
        type: "application/x-mpegURL",
      },
    ],
  };

  const videoJsOptions3 = {
    height: 400,
    width: 600,
    controls: true,
    sources: [
      {
        src: "http://localhost:8083/stream/pattern/channel/2/hls/live/index.m3u8",
        type: "application/x-mpegURL",
      },
    ],
  };

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
        <VideoJS options={videoJsOptions2} onReady={handlePlayerReady} />
        <VideoJS options={videoJsOptions3} onReady={handlePlayerReady} />
      </div>
      <div className={styles.main}>
        <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        <VideoJS options={videoJsOptions2} onReady={handlePlayerReady} />
        <VideoJS options={videoJsOptions3} onReady={handlePlayerReady} />
      </div>
      <div className={styles.main}>
        <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        <VideoJS options={videoJsOptions2} onReady={handlePlayerReady} />
        <VideoJS options={videoJsOptions3} onReady={handlePlayerReady} />
      </div>
    </div>
  );
};

export default pageLocation2;
