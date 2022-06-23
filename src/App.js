import { useRef } from "react";
import videojs from "video.js";
import VideoJS from "./VideoJS";

const App = () => {
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
      Hello World!
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
    </div>
  );
};

export default App;
