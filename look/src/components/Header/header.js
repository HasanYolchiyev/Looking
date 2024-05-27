import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
         <h1>LOOK</h1>
      </div>
      <nav className="nav-menu">
        <ul>
          <li><a href="/">Ana Sayfa</a></li>
          <li><a href="/products">Ürünler</a></li>
          <li><a href="/about">Hakkımızda</a></li>
          <li><a href="/contact">İletişim</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
