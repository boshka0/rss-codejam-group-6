import React from 'react';
import { withNamespaces } from 'react-i18next';
import i18n from '../../../services/translate';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './img/theatre.svg';

const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
}

function Header({ t }) {
  return (
    <div className="head-wrapper">
      <header className="main-header">
        <div className="logo">
          <img src={logo} width={50} height={50} alt={'logo'}/>
          <a href={'#'}>
            <h1>{t('Directors of the theater')}</h1>
          </a>
        </div>
        <div className="nav">
          <Link className="page-link head-search" to="/directors">
            <i className="fas fa-search" />
            <span>{t('Find')}</span>
          </Link>
          <button onClick={() => changeLanguage('en')}>en</button>
          <button onClick={() => changeLanguage('ru')}>ru</button>
          <button onClick={() => changeLanguage('by')}>by</button>
        </div>
      </header>
    </div>
  )
}

export default withNamespaces()(Header);
