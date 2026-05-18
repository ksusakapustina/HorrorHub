import {BrowserRouter, BrowserRouter as Router} from 'react-router-dom';
import Header from './assets/components/Header/Header';

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
