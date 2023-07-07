import { useState } from 'react';
import './App.css';
import Header from './components/header/Header.jsx';
import HeroHeader from './components/hero-header/HeroHeader';
import Services from './components/services/Services';
import TourList from './components/tour/TourList';
import { toursList } from './data';
import Pagination from './components/pagination/Pagination';
import SortTours from './components/sort-tours/SortTours';
import { paginate } from './utils/pagination';
import { sorting } from './utils/sort';
import Banner from './components/banner/Banner';
import NewsLetter from './components/news-letter/NewsLetter';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState('recommended');

  const sortedTourList = sorting(sortType, toursList);

  const { pages, orderToursList } = paginate(
    toursList,
    currentPage,
    sortedTourList
  );

  return (
    <div className='App'>
      <Header />
      <HeroHeader />
      <Services />
      <SortTours
        toursLength={toursList.length}
        sortType={sortType}
        setSortType={setSortType}
      />
      <TourList toursList={orderToursList} />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pages={pages}
      />
      <Banner />
      <NewsLetter />
    </div>
  );
}

export default App;
