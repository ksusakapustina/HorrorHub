import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import MainPage from './components/MainPage/MainPage';
import Myths from './components/Myths/Myths';
import TrueCrime from './components/TrueCrime/TrueCrime';
import Kuplinov from './components/Kuplinov/Kuplinov';

import AllMyths from './components/Myths/details/AllMyths/AllMyths';
import Ctulhu from './components/Myths/details/Ctulhu/Ctulhu';
import LitFilms from './components/Myths/details/LitFilms/LitFilms';
import StrangePlaces from './components/Myths/details/StrangePlaces/StrangePlaces';

import './normalize.css'
import './App.css';

function App() {
  return (
      <Router>
        <div className='app'>
          <Header />
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/main_page' element={<MainPage />} />
            <Route path='/myths' element={<Myths />} />
            <Route path='/true_crime' element={<TrueCrime />} />
            <Route path='/kuplinov' element={<Kuplinov />} />

            <Route path="/myths/all-myths" element={<AllMyths />} />
            <Route path="/myths/cthulhu" element={<Ctulhu />} />
            <Route path="/myths/litfilms" element={<LitFilms />} />
            <Route path="/myths/strange-places" element={<StrangePlaces />} />
          </Routes>
          <Footer />
        </div>
      </Router>
  )
}

export default App
