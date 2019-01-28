import React from 'react';
import {withNamespaces} from 'react-i18next';
import TeamMember from './TeamMember';
import dev1 from "./images/dev1.jpg";
import dev2 from "./images/dev2.jpg";
import dev3 from "./images/dev3.jpg";
import dev4 from "./images/dev4.jpg";
import './Team.css';

function Team({t}) {
  return (
    <div className="team-block">
      <div className="team-wrapper">
        <h3 className="team-heading">{t('Our team')}</h3>
        <ul className="team">
          <TeamMember name={t('Nastya Boksha')} photo={dev1} link="https://github.com/boshka0"/>
          <TeamMember name={t('Lesnik Matvey')} photo={dev2} link="https://github.com/qxFisher"/>
          <TeamMember name={t('Ivan Delendick')} photo={dev4} link="https://github.com/AngryIvan"/>
          <TeamMember name={t('Siarhei Kandratsiuk')} photo={dev3} link="https://github.com/GattyGamaun"/>
        </ul>
      </div>
    </div>
  )
}

export default withNamespaces()(Team);