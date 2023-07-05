import React from 'react';

function Navbar({ toggle, setToggle }) {
  return (
    <>
      <ul
        style={{
          clipPath: toggle && 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        }}
      >
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
    </>
  );
}

export default Navbar;
