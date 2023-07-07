import { useState } from 'react';
import './App.css';
import Header from './components/header/Header.jsx';
import HeroHeader from './components/hero-header/HeroHeader';
import Services from './components/services/Services';
import TourList from './components/tour/TourList';
import { toursList } from './data';
import Pagination from './components/pagination/Pagination';
import SortTours from './components/sort-tours/SortTours';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState('recommended');

  const TOUR_PER_PAGE = 6;
  const pages = Math.ceil(toursList.length / TOUR_PER_PAGE);
  const startIndex = (currentPage - 1) * TOUR_PER_PAGE;
  const finishedIndex = currentPage * TOUR_PER_PAGE;

  const sortedTourList =
    sortType === 'low'
      ? toursList.sort((a, b) => a.priceFrom - b.priceFrom)
      : toursList.sort((a, b) => b.priceFrom - a.priceFrom);

  console.log(sortedTourList);

  const toursResult = sortedTourList.slice(startIndex, finishedIndex);

  return (
    <div className='App'>
      <Header />
      <HeroHeader />
      <Services />
      <SortTours toursLength={toursList.length} setSortType={setSortType} />
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
