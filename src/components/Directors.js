import React from 'react';
import { Switch, Route } from "react-router-dom";
import Search from "./pages/Search";
import Director from "./pages/Director";

export default function Directors(props) {
  return (
    <Switch>
        <Route exact path='/directors' render={ () => (
          <Search term={props.term} initialData={props.initialData} update={props.update} data={props.data}/>
        )} /> />
        <Route path='/directors/:number' render={(info) => (
          <Director data={props.initialData[info.match.params.number - 1]} />
        )} /> />
    </Switch>
  )
}
