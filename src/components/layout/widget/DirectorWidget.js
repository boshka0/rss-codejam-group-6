import React from 'react';
import {withNamespaces} from 'react-i18next';
import {Link} from "react-router-dom";
import './DirectorWidget.css';

function DirectorWidget({data, lang, t}) {
  const link = `/directors/${data["id"]}`;
  return (
    <section className="director-day">
    <div className="director-widget">
      <img src={data.gallery[0]} alt="director" height={300}/>
      <div className="director-block">
        <div className="director-widget-heading">{t('Director of the day')}</div>
        <h4>{data.name[lang]}</h4>
        <div className="director-info">
          <p>{data.bio[0].info[lang]}</p>
          <p>{data.bio[1].info[lang]}</p>
        </div>
        <Link className="director-widget-button" to={link}>
          {t('Learn more')}
        </Link>
      </div>
    </div>
    </section>
  )
}

export default withNamespaces()(DirectorWidget);