import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
      <header className="main-header">
        <h1 className="logo">КУЛЬТ</h1>
        <div className="nav">
          <Link className="page-link" to="/">
            Главная
          </Link>
          <Link className="page-link" to="/search">
            Поиск режиссера
          </Link>
        </div>
      </header>
    )
}
