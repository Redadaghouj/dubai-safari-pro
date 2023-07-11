import React from 'react';
import './about-page.css';

function About() {
  return (
    <div className='about section-py'>
      <div className='container section-py'>
        <h1 className='title'>About This App</h1>
        <div className='desc'>
          This app is all about booking safari desert tour in Dubai
        </div>
        <div className='version'>
          Version: <b>1.0.0</b>
        </div>
      </div>
    </div>
  );
}

export default About;
