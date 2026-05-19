import {BrowserRouter, BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import './normalize.css'
import './App.css';

function App() {
  return ( 
      <Router>
        <div className='app'>
          <Header />
          <Footer />
        </div>            
      </Router>
  )
}

export default App
