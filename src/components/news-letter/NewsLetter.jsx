import React from 'react';
import './news-letter.css';
import newsLetterImg from '../../images/newsletterimage.jpg';

function NewsLetter() {
  return (
    <div className='news-letter section-py'>
      <div className='container'>
        <div className='wrapper'>
          <img src={newsLetterImg} alt='Dubai' />
          <div className='contact'>
            <h2 className='title'>Your Dubai itinerary is waiting.</h2>
            <p className='info'>
              Receive a curated 48-hour itinerary featuring the most iconic
              experience in Dubai, straight to your inbox.
            </p>
            <form>
              <input type='text' placeholder='Your email' />
              <input type='submit' value='Sign up' />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
