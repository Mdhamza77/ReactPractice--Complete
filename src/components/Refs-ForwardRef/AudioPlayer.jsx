import React, { forwardRef, useRef } from "react";
import { renderIntoDocument } from "react-dom/test-utils";

const Audio = forwardRef(({src , type , controls} ,ref) => {
  return <div>
     <audio ref={ref} controls={controls}>
        <source src={src} type={type}  />
     </audio>
  </div>

}); 

const AudioPlayer = () => {
  const ref = useRef(null);
  return <div>
       <button onClick={()=>ref.current.play()} >Play</button>
       <button onClick={()=>ref.current.pause()}>Pause</button>
     
       <Audio
        ref={ref}
        src= "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" 
        type="audio/mp3" 
        controls
       />
  </div>;
};

export default AudioPlayer;
