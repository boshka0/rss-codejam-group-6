import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './img/theatre.svg';

export default function Header() {
  return (
    <div className="head-wrapper">
      <header className="main-header">
        <div className="logo">
          <img src={logo} width={50} height={50} alt={'logo'}/>
          <a href={'#'}>
            <h1>Режиссеры театра Беларуси</h1>
          </a>
        </div>
        <div className="nav">
          <Link className="page-link" to="/search">
            <i className="fas fa-search" />
            <span>Поиск</span>
          </Link>
        </div>
      </header>
    </div>
  )
}
