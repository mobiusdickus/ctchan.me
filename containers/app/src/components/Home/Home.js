import React from 'react';

import './Home.css';
import Navigation from '../Navigation/Navigation';


function home() {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Colin Chan</h1>
        <Navigation />
      </header>
    </div>
  );
};

export default home;
