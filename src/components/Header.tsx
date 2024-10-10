import React from 'react';
import './Header.css'; // Import the CSS file

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>Kaden Casanave</h1>
        </div>
        <div className="links">
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/contact">Contact</a>
        </nav>
        </div>
      </div>
    </header>
  );
}
