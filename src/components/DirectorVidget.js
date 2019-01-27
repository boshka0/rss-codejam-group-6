import React from 'react';
import { withNamespaces } from 'react-i18next';
import { Link } from "react-router-dom";

function DirectorVidget({ data, lang, t }) {
  const link = `/directors/${data["id"]}`;
  return (
    <div className="director-vidget">
      <h1 className="director-vidget-heading">{t('Director of the day')}</h1>
      <div>
        <h3>{data.name[lang]}</h3>
        <img src={data.gallery[0]} alt="director" />
      </div>
      <Link className="director-vidget-button" to={link}>
        {t('Learn more')}
      </Link>
    </div>
  )
}

export default withNamespaces()(DirectorVidget);