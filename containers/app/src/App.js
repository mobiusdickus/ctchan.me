import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import CantTouchThis from './components/CantTouchThis/CantTouchThis';

function App() {

  return (
    <main> 
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/canttouchthis' component={CantTouchThis}/>
      </Switch>
    </main>
  );
}

export default App;
