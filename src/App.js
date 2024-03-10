import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import React from 'react';


import Home from './pages/Home';
import Second from './pages/Second';
import Third from './pages/Third';
import Fourth from './pages/Fourth';
import Fifth from './pages/Fifth';
import Sixth from './pages/Sixth';
import Seventh from './pages/Seventh';
import Eight from './pages/Eight';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Second" element={<Second/>}/>
        <Route path="/Third" element={<Third/>}/>
        <Route path="/Fourth" element={<Fourth/>}/>
        <Route path="/Fifth" element={<Fifth/>}/>
        <Route path="/Sixth" element={<Sixth/>}/>
        <Route path="/Seventh" element={<Seventh/>}/>
        <Route path="/Eight" element={<Eight/>}/>

      </Routes>
    </Router>
  )
}

export default App;
