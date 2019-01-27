import React from "react";
import { withNamespaces } from 'react-i18next';
import { Link } from "react-router-dom";

const directorData = ({ director, t }) => {
  const link = `/directors/${director.id}`;
  return (
    <div className="director-data">
      <img className="director-data-img" src={director["gallery"][0]} alt="director" />
      <div className="director-data-bio">
        <h3>{director.name}</h3>
        <h4 className="director-data-city">{director.city}</h4>
      </div>
      <Link className="director-data-button" to={link}>
        {t('Learn more')}
      </Link>
    </div>
  );
};

export default withNamespaces()(directorData);