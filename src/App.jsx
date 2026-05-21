import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import MainPage from './components/MainPage/MainPage';
import Myths from './components/Myths/Myths';
import TrueCrime from './components/TrueCrime/TrueCrime';
import Kuplinov from './components/Kuplinov/Kuplinov';

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
          </Routes>

        </div>            
      </Router>
  )
}

export default App
