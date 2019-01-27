import React from 'react';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../header/img/theatre.svg';

function Footer({ t }) {
  return (
    <footer>
      <div className="foot-wrapper">
        <div className="foot-main">
          <img src={logo} width={50} height={50} alt={'logo'}/>
          <Link to="/">
            <span className="block-string">{t('Directors')} {t('Of the theater')} {t('Of Belarus')}</span>
          </Link>
        </div>
        <div className="copyright">
          <p>&copy; 2019 {t('RTB')}</p>
        </div>
      </div>
    </footer>
  )
}

export default withNamespaces()(Footer);