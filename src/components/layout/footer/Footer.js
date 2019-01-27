import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';
import logo from '../header/img/theatre.svg';

export default function Footer() {
  return (
    <footer>
      <div className="foot-wrapper">
        <div className="foot-main">
          <img src={logo} width={50} height={50} alt={'logo'}/>
          <Link to="/">
            <span className="block-string">Режиссеры театра Беларуси</span>
          </Link>
        </div>
        <div className="copyright">
          <p>&copy; 2019 РТБ</p>
        </div>
      </div>
    </footer>
  )
}
