import React, { Component } from 'react';

import About from "../layout/about/About";
import DirectorVidget from "../DirectorVidget";
import Team from "../Team";

export default class Main extends Component {
  render() {
    return (
      <main className="main-wrapper">
        <About />
        <DirectorVidget name="Someone" city="Minsk" mainInfo="something" photo="" />
        <Team />
      </main>
    )
  }
}
