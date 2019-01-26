import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Main from "./components/pages/Main";
import Directors from "./components/Directors";

const directorsData = require('./directors.json');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.initialData = directorsData;
    this.dirOfTheDay = Math.floor(Math.random() * 7);
    this.state = {
      term: "",
      data: directorsData 
    }
  }
  updateData = (config) => {
    this.setState(config);
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={props => (
            <Main data={this.initialData[this.dirOfTheDay]}/>
          )} />
          <Route path="/directors" render={props => (
            <Directors term={this.state.term} initialData={this.initialData} update={this.updateData} data={this.state.data}/>
          )} />
        </div>
      </Router>
    );
  }
}
