import {BrowserRouter, BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import './normalize.css'
import './App.css';

function App() {
  return (
    <>
      <Router>
        <div className='app'>
          <Header />
        </div>            
      </Router>
    </>
  )
}

export default App
