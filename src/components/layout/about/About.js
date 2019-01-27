import React from 'react';
import { withNamespaces } from 'react-i18next';
import './About.css';

function About({ t }) {
  return (
    <div className="about-container">
      <div className="about-wrapper">
        <h2>{t('27 March')}</h2>
        <p>{t('About website')}</p>
      </div>
    </div>
  )
}

export default withNamespaces()(About);