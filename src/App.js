import { useState } from 'react';
import './App.css';
import Header from './components/header/Header.jsx';
import HeroHeader from './components/hero-header/HeroHeader';
import Services from './components/services/Services';
import TourList from './components/tour/TourList';
import { toursList } from './data';
import Pagination from './components/pagination/Pagination';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const TOUR_PER_PAGE = 6;

  const pages = Math.ceil(toursList.length / TOUR_PER_PAGE);
  const startIndex = (currentPage - 1) * TOUR_PER_PAGE;
  const finishedIndex = currentPage * TOUR_PER_PAGE;

  const toursResult = toursList.slice(startIndex, finishedIndex);

  return (
    <div className='App'>
      <Header />
      <HeroHeader />
      <Services />
      <TourList toursList={toursResult} />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pages={pages}
      />
    </div>
  );
}

export default App;
