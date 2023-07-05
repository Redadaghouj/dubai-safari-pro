import React, { useState } from 'react';
import logo from '../../images/logo.png';
import './header.css';

function Header() {
  const [toggle, setToggle] = useState(false);

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
              <i className='fa-solid fa-house'></i>
              Home
            </li>
          </a>
          <a href='/'>
            <li>
              <i className='fa-solid fa-address-card'></i>
              About
            </li>
          </a>
          <a href='/'>
            <li>
              <i className='fa-solid fa-right-to-bracket'></i>
              Login
            </li>
          </a>
          <a href='/'>
            <li>
              <i className='fa-solid fa-user-plus'></i>
              Register
            </li>
          </a>
        </ul>
        <div className='menu-toggle' onClick={() => setToggle(!toggle)}>
          {toggle ? (
            <i className='fa-solid fa-xmark'></i>
          ) : (
            <i className='fa-solid fa-bars'></i>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
