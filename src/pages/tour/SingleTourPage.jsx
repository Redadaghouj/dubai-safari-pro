import React from 'react';
import { useParams } from 'react-router-dom';
import safariImg from '../../images/dubaiii.jpg';
import RatingStars from '../../components/tour/RatingStars';
import AboutCard from '../../components/tour/AboutCard';
import './single-tour-page.css';
import { Link } from 'react-router-dom';

function SingleTourPage() {
  const { tourId } = useParams();
  return (
    <div className='single-tour'>
      <div className='header-img'>
        <div className='container'>
          <h2 className='title'>Safari Details</h2>
          <Link to='/' className='back-home'>
            Home <strong>/ Safari Details</strong>
          </Link>
        </div>
      </div>
      <div className='container section-py'>
        <div className='tour-wrapper section-py'>
          <h1 className='tour-title'>
            Dubai: Half Day Desert & Quad Bike Option
          </h1>
          <div className='info'>
            <RatingStars />
            <div className='rating'>5</div>
            <div className='reviews'>(5,580 reviews)</div>
            <div className='act-provider'>
              Activity Provider : <span>Youssef Abbas</span>
            </div>
          </div>
          <img src={safariImg} alt='img' />
          <div className='desc'>
            <h2 className='desc-title'>Description</h2>
            <div className='desc-text'>
              Discover a different side of Dubai an a fun-filled safari across
              the desert. Try sailboarding, dune bashing and a camel ride, with
              the option to add an electrifying quad bike ride or immersive Al
              Khayma Camp dinner experience to your adventure.
            </div>
          </div>
          <div className='about-activity'>
            <h2 className='about-activity-title'>About this activity</h2>
            <AboutCard />
            <AboutCard />
            <AboutCard />
            <AboutCard />
            <AboutCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleTourPage;
