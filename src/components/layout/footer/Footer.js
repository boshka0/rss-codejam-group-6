import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../header/img/theatre.svg';

export default function Footer() {
  return (
    <footer>
      <div className="foot-wrapper">
        <div className="foot-main">
        <div>
          <a href={'#'} className="foot-logo">
            <img src={logo} width={80} height={80} alt={'logo'}/>
            <div className="block-string">
              <div>Режиссеры</div>
              <div>театра</div>
              <div>Беларуси</div>
            </div>
          </a>
        </div>
        <div className="foot-links">
          <Link className="page-link foot-link" to="/search">
            <span>Поиск</span>
          </Link>
          <Link className="page-link foot-link" to="/search">
            <span>Link1</span>
          </Link>
          <Link className="page-link foot-link" to="/search">
            <span>Link2</span>
          </Link>
        </div>
        </div>
        <div className="copyright">
          <p>&copy; 2019 РТБ</p>
        </div>
      </div>
    </footer>
  )
}
