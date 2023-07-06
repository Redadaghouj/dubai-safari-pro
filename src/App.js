import './App.css';
import Header from './components/header/Header.jsx';
import HeroHeader from './components/hero-header/HeroHeader';
import Services from './components/services/Services';
import TourList from './components/tour/TourList';

function App() {
  return (
    <div className='App'>
      <Header />
      <HeroHeader />
      <Services />
      <TourList />
    </div>
  );
}

export default App;
