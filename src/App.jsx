import {BrowserRouter, BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import MainPage from './components/MainPage/MainPage';

import './normalize.css'
import './App.css';

function App() {
  return ( 
      <Router>
        <div className='app'>
          <Header />
          <MainPage />
          <Footer />
        </div>            
      </Router>
  )
}

export default App
