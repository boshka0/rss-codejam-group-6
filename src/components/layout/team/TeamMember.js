import React from 'react';
import logo from "./images/github-logo.png";
import PropTypes from "prop-types";

export default function TeamMember(props) {
  return (
    <li className="team-member">
      <figure>
        <img className="team-member-photo" src={props.photo} alt="developer" />
        <figcaption>{props.name}</figcaption>
      </figure>
      <a href={props.link} target="_base">
        <img src={logo} alt="github" />
      </a>
    </li>
  )
}

TeamMember.propTypes = {
  name: PropTypes.string,
  photo: PropTypes.string,
  link: PropTypes.string
};
