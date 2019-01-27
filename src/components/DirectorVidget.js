import React from 'react';
import { Link } from "react-router-dom";

export default function DirectorVidget({ data }) {
  const link = `/directors/${data["id"]}`;
  return (
    <div className="director-vidget">
      <h1 className="director-vidget-heading">РЕЖИССЕР ДНЯ</h1>
      <div>
        <h3>{data.name}</h3>
        <img src={data.gallery[0]} alt="director" />
      </div>
      <Link className="director-vidget-button" to={link}>
        Узнать больше
      </Link>
    </div>
  )
}
