import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home.tsx';
import Header from './components/Header.tsx';
import Footer from './Footer.tsx';
import Contact from './components/contact/Contaxt.tsx';


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
            <Route path="/contact" element={<Contact />} />
          </Routes>
          </div>
        </div>
      </Router>
      <Footer className = "footer"/>
    </div>
  );
}

export default App;

