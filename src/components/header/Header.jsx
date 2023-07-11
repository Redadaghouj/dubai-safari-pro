import React, { useState } from 'react';
import logo from '../../images/logo.png';
import './header.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <header className='header'>
      <div className='container'>
        <Link to='/'>
          <img src={logo} alt='Dubai Safari' />
          Dubai desert safari
        </Link>
        <Navbar toggle={toggle} setToggle={setToggle} />
      </div>
    </header>
  );
}

export default Header;
