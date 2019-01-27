import React from 'react';
import BigPicture from 'react-bigpicture';

export default function DirectorVideo(props) {
  return (
        <BigPicture
            type="youtube"
            src={`https://www.youtube.com/watch?v=${props.videoId}`}
        >
            <img 
                className="director-video"
                src={`https://img.youtube.com/vi/${props.videoId}/hqdefault.jpg`} 
                alt="video" />
        </BigPicture>
  )
}

