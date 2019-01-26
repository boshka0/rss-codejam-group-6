import React from 'react';
import DirectorTimeline from '../DirectorTimeline';

export default function Director({ data }) {
  return (
    <div>
      <h1>Hello</h1>
      <DirectorTimeline info={data.bio} />
    </div>
  )
}

