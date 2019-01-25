import React from 'react';
import { Link } from "react-router-dom";

export default function DirectorVidget(props) {
  return (
    <div className="director-vidget">
      <h1 className="director-vidget-heading">РЕЖИССЕР ДНЯ</h1>
      <h2>{props.name}</h2>
      <h3>{props.city}</h3>
      <img src={props.photo} alt="director" />
      <p>{props.mainInfo}</p>
      <Link className="director-vidget-button" to="/director/1">
        Узнать больше
      </Link>
    </div>
  )
}
