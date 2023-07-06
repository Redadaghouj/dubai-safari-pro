import React from 'react';
import './services.css';
import ServicesItem from './ServicesItem';

function Services() {
  return (
    <div className='services section-py'>
      <div className='container'>
        <div className='services-item-wrapper'>
          <ServicesItem
            icon={<i class='fa-brands fa-space-awesome fa-fw'></i>}
            title={'Adventures'}
          />
          <ServicesItem
            icon={<i class='fa-solid fa-people-group fa-fw'></i>}
            title={'Family tours'}
          />
          <ServicesItem
            icon={<i class='fa-solid fa-city fa-fw'></i>}
            title={'City cards'}
          />
          <ServicesItem
            icon={<i class='fa-solid fa-suitcase-rolling fa-fw'></i>}
            title={'Multi-day trips'}
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
