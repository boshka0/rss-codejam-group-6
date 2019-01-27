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
        <div>
          <a href={'#'} className="foot-logo">
            <img src={logo} width={80} height={80} alt={'logo'}/>
            <div className="block-string">
              <div>{t('Directors')}</div>
              <div>{t('Of the theater')}</div>
              <div>{t('Of Belarus')}</div>
            </div>
          </a>
        </div>
        <div className="foot-links">
          <Link className="page-link foot-link" to="/directors">
            <span>{t('Find')}</span>
          </Link>
          <Link className="page-link foot-link" to="/directors">
            <span>Link1</span>
          </Link>
          <Link className="page-link foot-link" to="/directors">
            <span>Link2</span>
          </Link>
        </div>
        </div>
        <div className="copyright">
          <p>&copy; 2019 {t('RTB')}</p>
        </div>
      </div>
    </footer>
  )
}

export default withNamespaces()(Footer);