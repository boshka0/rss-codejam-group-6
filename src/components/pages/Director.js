import React from 'react';
import DirectorTimeline from '../DirectorTimeline';

export default function Director({ data, lang }) {
  return (
    <div>
      <h1>Hello</h1>
      <DirectorTimeline info={data.bio} lang={lang} />
    </div>
  )
}

