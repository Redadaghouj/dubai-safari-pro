import React from 'react';
import './services-item.css';

function ServicesItem({ icon, title }) {
  return (
    <div className='services-item'>
      {icon} {title}
    </div>
  );
}

export default ServicesItem;
