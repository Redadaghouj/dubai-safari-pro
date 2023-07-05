import React from 'react';
import '../hero-header/hero-header.css';

function HeroHeader() {
  return (
    <div className='hero-header section-py'>
      <div className='container'>
        <div className='search-input'>
          <input type='text' placeholder='What are you looking for ?' />
          <i className='fa-solid fa-magnifying-glass'></i>
          <input type='button' value='Search' />
        </div>
        <div className='hero-text'>
          <h1>Dubai</h1>
          <h1>Desert Safaris</h1>
        </div>
      </div>
    </div>
  );
}

export default HeroHeader;
