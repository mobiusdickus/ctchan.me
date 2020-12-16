import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';


import './Home.css';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <h1>
          Colin Chan
        </h1>
      </header>
      <div>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Home;
