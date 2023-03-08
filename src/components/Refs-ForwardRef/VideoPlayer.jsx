import React from "react";
import { useRef } from "react";
import { forwardRef } from "react";

const VideoPlayer = forwardRef(({ src, type, width }, ref) => {
  return (
    <div>
      <video width={width} ref={ref}>
        <source type={type} src={src} />
      </video>
    </div>
  );
});

export const VideoRef = () => {
  const ref = useRef(null);
  console.log(ref)
  return (
    <>
    <br/>
     Video Player Refs  : 
      <button onClick={()=>ref.current.play()}> Play </button>
      <button onClick={()=>ref.current.pause()}> Pause </button>
      <VideoPlayer
        ref={ref}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        type="video/mp4"
        width="250"
      />
    </>
  );
};

export default VideoPlayer;
