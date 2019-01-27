import React from 'react';
import DirectorTimeline from '../DirectorTimeline';
import Slider from "react-slick";

export default function Director({ data }) {
  const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
      speed: 500,
      variableWidth: true
    };
 
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
      
      <Slider {...settings}>
      { data.gallery.map(photo => 
        <div>
          <img alt='' src={photo} className="carousel-photo"/>
        </div>
      )}
      </Slider>
      <DirectorTimeline info={data.bio} />
    </div>
  )
}

// { data.gallery.map(photo => 
//   <div>
//     <img alt='' src={photo} className="carousel-photo"/>
//   </div>
// )}