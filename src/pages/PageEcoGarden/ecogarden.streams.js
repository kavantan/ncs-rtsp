export const videoJsOptions = {
  height: 200,
  width: 600,
  controls: true,
  sources: [
    {
      src: "http://localhost:8083/stream/ecogarden/channel/0/hls/live/index.m3u8",
      type: "application/x-mpegURL",
    },
  ],
};

export const videoJsOptions1 = {
  height: 200,
  width: 600,
  controls: true,
  sources: [
    {
      src: "http://localhost:8083/stream/ecogarden/channel/1/hls/live/index.m3u8",
      type: "application/x-mpegURL",
    },
  ],
};
