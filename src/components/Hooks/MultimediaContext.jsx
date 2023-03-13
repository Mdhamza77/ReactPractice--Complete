import React, { createContext, useContext, useState } from 'react';

const Video = createContext(undefined)
const MultimediaContext = () => {
    const initialState = {
        id: 1 ,
        video : "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" ,
        type : "video/mp4" ,
        width : 250
    }
    const [media] = useState(initialState)
    return (
        <div>

            <Video.Provider value={media}>
                 <VideoPlayer value={media} />
            </Video.Provider>
        </div>
    );
}

const VideoPlayer = ({children}) => {
    const video = useContext(Video) ;
    return(
        <div>
           <video src={video.video} alt={video.id} width={video.width} controls />
        </div>
    )
}

export default MultimediaContext;
