import React, { Component } from 'react';
import DirectorTimeline from '../DirectorTimeline';

export default class Director extends Component {
  render() {
    return (
      <DirectorTimeline name={this.props.name} info={this.props.info}/>
    )
  }
}
