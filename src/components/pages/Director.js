import React from 'react';
import DirectorTimeline from '../DirectorTimeline';
import DirectorVideo from "../DirectorVideo";
import DirectorMap from "../DirectorMap";

export default function Director({ data }) {
  return (
    <div>
      <DirectorTimeline info={data.bio} />
      {data.videoId && <DirectorVideo videoId={data.videoId}/>}
      <DirectorMap city={data.city} coordinates={data.coordinates} />
    </div>
  )
}

