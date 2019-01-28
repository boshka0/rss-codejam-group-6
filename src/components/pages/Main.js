import React, { Component } from 'react';

import About from "../layout/about/About";
import DirectorVidget from "../layout/vidget/DirectorVidget";
import Team from "../layout/team/Team";

export default class Main extends Component {
  render() {
    return (
      <main className="main-wrapper">
        <About />
        <DirectorVidget 
          data={this.props.data} 
          lang={this.props.lang}/>
        <Team />
      </main>
    )
  }
}
