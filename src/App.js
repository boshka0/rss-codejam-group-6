import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/layout/header/Header";
import Main from "./components/pages/Main";
import Search from "./components/pages/Search";
import Director from "./components/pages/Director";

import './App.css';

const directorsInfo = require('./directors.json');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      directors: Object.keys(directorsInfo),
      directorInfo: directorsInfo
    }
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={props => (
            <Main />
          )} />
          <Route path="/search" render={props => (
            <Search />
          )} />
          <Route path="/director/1" render={props => (
            <Director name={this.state.directors[0]} info={this.state.directorInfo[this.state.directors[0]]["info"]} />
          )} />
        </div>
      </Router>
    );
  }
}
