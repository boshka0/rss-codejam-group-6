import React, { Component } from 'react';
import DirectorTimeline from '../DirectorTimeline';
import DirectorVideo from "../DirectorVideo";
import DirectorMap from "../DirectorMap";

export default class Director extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>
        <DirectorTimeline info={this.props.data.bio} />
        {this.props.data.videoId && <DirectorVideo videoId={this.props.data.videoId} />}
        <DirectorMap city={this.props.data.city} coordinates={this.props.data.coordinates} />
      </div>
    )
  }
}
