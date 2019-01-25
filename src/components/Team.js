import React from 'react';
import TeamMember from './TeamMember';
import dev1 from "../images/dev1.jpg";
import dev2 from "../images/dev2.jpg";
import dev3 from "../images/dev3.jpg";
import dev4 from "../images/dev4.jpg";

export default function Team() {
  return (
    <div className="team-wrapper">
      <h3 className="team-heading">НАША КОМАНДА:</h3>
      <ul className="team">
        <TeamMember name="Бокша Анастасия" photo={dev1} link="https://github.com/boshka0" />
        <TeamMember name="Лесник Матвей" photo={dev2} link="https://github.com/qxFisher" />
        <TeamMember name="Делендик Иван" photo={dev4} link="https://github.com/AngryIvan" />
        <TeamMember name="Кондратюк Сергей" photo={dev3} link="https://github.com/GattyGamaun" />
      </ul>
    </div>
  )
}
