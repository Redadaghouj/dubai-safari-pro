import React, { useState } from 'react';
import logo from '../../images/logo.png';
import './header.css';
import Navbar from './Navbar';

function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <header className='header'>
      <div className='container'>
        <a href='/'>
          <img src={logo} alt='Dubai Safari' />
          Dubai desert safari
        </a>
        <Navbar toggle={toggle} setToggle={setToggle} />
      </div>
    </header>
  );
}

export default Header;
