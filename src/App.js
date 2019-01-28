import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";

import Header from "./components/layout/header/Header";
import Main from "./components/pages/Main";
import Directors from "./components/Directors";
import Footer from "./components/layout/footer/Footer";

const directorsData = require('./directors.json');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.initialData = directorsData;
    this.dirOfTheDay = Math.floor(Math.random() * 5);
    this.state = {
      lang: "en",
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
          <Header update={this.updateData}/>
          <Route exact path="/" render={props => (
            <Main 
            data={this.initialData[this.dirOfTheDay]}
            lang={this.state.lang}/>
          )} />
          <Route path="/directors" render={props => (
            <Directors 
            term={this.state.term} 
            initialData={this.initialData} 
            update={this.updateData} 
            data={this.state.data}
            lang={this.state.lang}/>
          )} />
          <Footer/>
        </div>
      </Router>
    );
  }
}
