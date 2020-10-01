import React from 'react';

import Contact from '../Contact/Contact';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <h1>
          Colin Chan
        </h1>
        <Contact />
      </header>
    </div>
  );
};

export default Home;
