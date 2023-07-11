import React from 'react';
import './tour-card.css';
import RatingStars from './RatingStars';
import { useNavigate } from 'react-router-dom';

function TourCard({ data }) {
  const route = useNavigate();
  return (
    <div className='card'>
      <img src={data.image} alt={data.title} />
      <div className='label'>adventure</div>
      <div className='card-text'>
        <h3 className='title'>{data.title}</h3>
        <p className='duration'>{data.duration} - Pickup available</p>
        <div className='rating-reviews'>
          <RatingStars stars={data.rating} />
          <div className='rating'>{data.rating}</div>
          <div className='reviews'>({data.reviews} reviews)</div>
        </div>
        <h3 className='price'>
          From {data.priceFrom}$ <span>per person</span>
        </h3>
        <div className='card-btn' onClick={() => route(`/route/${data.id}`)}>
          See More
        </div>
      </div>
    </div>
  );
}

export default TourCard;
