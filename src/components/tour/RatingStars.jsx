import React from 'react';
import './rating-stars.css';

function RatingStars({ stars }) {
  const starsHandel = () => {
    const content = [];
    for (let i = 0; i < 5; i++) {
      if (i >= parseInt(stars)) {
        if (!Number.isInteger(stars)) {
          content.push(<i class='fa-solid fa-star-half-stroke'></i>);
          stars = parseInt(stars);
        } else {
          content.push(<i className='fa-regular fa-star'></i>);
        }
      } else {
        content.push(<i className='fa-solid fa-star'></i>);
      }
    }
    return content;
  };
  return <div className='stars'>{starsHandel()}</div>;
}

export default RatingStars;
