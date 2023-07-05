import React from 'react';
import logo from '../../images/logo.png';
import './header.css';

function Header() {
  return (
    <header className='header'>
      <div className='container'>
        <a href='/'>
          <img src={logo} alt='Dubai Safari' />
          Dubai desert safari
        </a>
        <ul>
          <a href='/'>
            <li>
              <i class='fa-solid fa-house'></i>
              Home
            </li>
          </a>
          <a href='/'>
            <li>
              <i class='fa-solid fa-address-card'></i>
              About
            </li>
          </a>
          <a href='/'>
            <li>
              <i class='fa-solid fa-right-to-bracket'></i>
              Login
            </li>
          </a>
          <a href='/'>
            <li>
              <i class='fa-solid fa-user-plus'></i>
              Register
            </li>
          </a>
        </ul>
      </div>
    </header>
  );
}

export default Header;
