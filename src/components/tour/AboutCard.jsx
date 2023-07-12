import React from 'react';
import './about-card.css';

function AboutCard({ icon, title, desc }) {
  return (
    <div className='about-card'>
      {icon}
      <div className='about-title'>{title}</div>
      <div className='about-desc'>{desc}</div>
    </div>
  );
}

export default AboutCard;
