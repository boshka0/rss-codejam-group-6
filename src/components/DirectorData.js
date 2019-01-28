import React from "react";
import {withNamespaces} from 'react-i18next';
import {Link} from "react-router-dom";

const directorData = ({director, lang, t}) => {
  const link = `/directors/${director.id}`;
  return (
    <div className="director-data">
      <div className="director-data-img">
        <img src={director["gallery"][0]} alt="director" height={150}/>
      </div>
      <div className="director-data-bio">
        <div>{director.name[lang]}</div>
        <div className="director-data-city">{director.city[lang]}</div>
        <div className="director-data-info">
          <p>{director.bio[0].info[lang]}</p>
        </div>
        <Link className="director-data-button" to={link}>
          {t('Learn more')}
        </Link>
      </div>
    </div>
  );
};

export default withNamespaces()(directorData);