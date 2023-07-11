import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ toggle, setToggle }) {
  return (
    <>
      <ul
        style={{
          clipPath: toggle && 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        }}
      >
        <Link to='/'>
          <li>
            <i className='fa-solid fa-house'></i>
            Home
          </li>
        </Link>
        <Link to='/about'>
          <li>
            <i className='fa-solid fa-address-card'></i>
            About
          </li>
        </Link>
        <Link to='/login'>
          <li>
            <i className='fa-solid fa-right-to-bracket'></i>
            Login
          </li>
        </Link>
        <Link to='/register'>
          <li>
            <i className='fa-solid fa-user-plus'></i>
            Register
          </li>
        </Link>
      </ul>
      <div className='menu-toggle' onClick={() => setToggle(!toggle)}>
        {toggle ? (
          <i className='fa-solid fa-xmark'></i>
        ) : (
          <i className='fa-solid fa-bars'></i>
        )}
      </div>
    </>
  );
}

export default Navbar;
