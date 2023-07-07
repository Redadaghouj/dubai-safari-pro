import React from 'react';
import './tour-list.css';
import TourCard from './TourCard';

function TourList({ toursList }) {
  return (
    <div className='tour section-py'>
      <div className='container'>
        <div className='cards'>
          {toursList.map((tour) => (
            <TourCard key={tour.id} data={tour} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TourList;
