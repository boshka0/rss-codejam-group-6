import React from 'react';
import DirectorTimeline from '../DirectorTimeline';
//import SwipeGallery from 'react-swipe-gallery'

export default function Director({ data }) {
  return (
    <div>
      <div className="director-page">
        <div className="director-page-img">
          <img  src={data["gallery"][0]} alt="director" />
        </div>
        <div className="director-page-bio">
          <h1 className="director-page-name">{ data.name }</h1>
          <h2 className="director-page-city">{ data.city }</h2>
        </div>
      </div>
      {/* <SwipeGallery elements={data["gallery"]} maxElement={3} />   */}
      <DirectorTimeline info={data.bio} />
    </div>
  )
}

