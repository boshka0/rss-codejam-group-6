import React, { Component } from 'react';
import DirectorTimeline from '../DirectorTimeline';
import DirectorVideo from "../DirectorVideo";
import DirectorMap from "../DirectorMap";
import Slider from "react-slick";

export default class Director extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
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
            <img  src={this.props.data["gallery"][0]} alt="director" />
          </div>
          <div className="director-page-bio">
            <h1 className="director-page-name">{ this.props.data.name }</h1>
            <h2 className="director-page-city">{ this.props.data.city }</h2>
          </div>
        </div> 
        <Slider {...settings}>
          { data.gallery.map(photo => 
            <div>
              <img alt='' src={photo} className="carousel-photo"/>
            </div>
          )}
        </Slider>
        <DirectorTimeline info={this.props.data.bio} />
        {this.props.data.videoId && <DirectorVideo videoId={this.props.data.videoId} />}
        <DirectorMap city={this.props.data.city} coordinates={this.props.data.coordinates} />
      </div>
    )
  }
}
