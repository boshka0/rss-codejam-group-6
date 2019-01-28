import React from 'react';
import {withNamespaces} from 'react-i18next';
import {Link} from "react-router-dom";

function DirectorVidget({data, lang, t}) {
  const link = `/directors/${data["id"]}`;
  return (
    <section className="director-day">
    <div className="director-vidget">
      <img src={data.gallery[0]} alt="director" height={300}/>
      <div className="director-block">
        <div className="director-vidget-heading">{t('Director of the day')}</div>
        <div>
          <h4>{data.name[lang]}</h4>
        </div>
        <Link className="director-vidget-button" to={link}>
          {t('Learn more')}
        </Link>
      </div>
    </div>
    </section>
  )
}

export default withNamespaces()(DirectorVidget);