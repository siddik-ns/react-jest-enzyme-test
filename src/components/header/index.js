import React from 'react';
import './style.scss';
import Logo from './../../assets/logo.png';

const Header = (props) => {
  return (
    <header>
      <div className="wrap" data-test="headerComponent">
        <div className="logo">
          <img src={Logo} alt="Logo" data-test="logoIMG" />
        </div>
      </div>
    </header>
  )
};

export default Header;