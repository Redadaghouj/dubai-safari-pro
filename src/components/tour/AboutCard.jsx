import React from 'react';
import './about-card.css';

function AboutCard({ icon, title, desc }) {
  return (
    <div className='about-card'>
      <i class='fa-solid fa-house'></i>
      <div className='about-title'>Free Cancellation</div>
      <div className='about-desc'>
        Cancel up to 24 hours in advance to receive a full refund
      </div>
    </div>
  );
}

export default AboutCard;
