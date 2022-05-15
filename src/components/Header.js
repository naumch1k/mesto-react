import React from 'react';
import logoPath from './../images/header-logo.svg';

function Header() {
  return (
    <header className="header page__header">
      <img className="header__logo" src={logoPath} alt="Around the U.S. app logo" />
    </header>
  )
}

export default Header;
