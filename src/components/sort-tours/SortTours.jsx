import React from 'react';
import './sort-tours.css';

function SortTours({ toursLength, sortType, setSortType }) {
  return (
    <div className='tour-header'>
      <div className='container'>
        <span className='search-result'>
          {toursLength} tours found <i className='fa-solid fa-circle-info'></i>
        </span>
        <select
          name='filter'
          id='filter'
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value='recommended'>Recommended</option>
          <option value='low'>Price - Low to high</option>
          <option value='high'>Price - High to low</option>
        </select>
      </div>
    </div>
  );
}

export default SortTours;
