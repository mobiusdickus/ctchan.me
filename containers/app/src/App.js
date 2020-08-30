import React from 'react';
import './App.css';
import Contact from './components/Contact/Contact';
import CantTouchThis from './components/CantTouchThis/CantTouchThis';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Colin Chan</h1>
        <Contact />
        <CantTouchThis />
      </header>
    </div>
  );
}

export default App;
