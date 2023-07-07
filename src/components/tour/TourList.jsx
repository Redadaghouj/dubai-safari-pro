import React from 'react';
import './tour-list.css';
import TourCard from './TourCard';

function TourList({ toursList }) {
  return (
    <div className='tour section-py'>
      <div className='container'>
        <div className='tour-header'>
          <span className='search-result'>
            24 tours found <i className='fa-solid fa-circle-info'></i>
          </span>
          <select name='filter' id='filter'>
            <option value='default'>Recommended</option>
            <option value='low-to-high'>Price - Low to high</option>
            <option value='high-to-low'>Price - High to low</option>
          </select>
        </div>
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
