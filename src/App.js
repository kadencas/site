import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home.tsx';
import Header from './components/Header.tsx';
import Footer from './Footer.tsx';

import './App.css';
import About from './components/about/About.tsx';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <div className="App">
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
          </div>
        </div>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;

