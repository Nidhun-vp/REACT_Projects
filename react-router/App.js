import React from 'react';

import './App.css';

import About from './components/about/About';
import Header from './components/Header/Header';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Todoapp from './components/Todoapp/Todoapp';
function App() {
  return (
      
      <Router>
        <Header/>
        <div className="content">
        <Routes>
        <Route path='/' exact element={<Todoapp />}></Route>
        <Route path='/about' element={<About />}></Route>
        </Routes>
        {/* /about url lil poyal about component kittum */}
        </div>
      </Router>
      
  );
}

export default App;
