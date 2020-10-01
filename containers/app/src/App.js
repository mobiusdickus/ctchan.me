import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';
import ErrorPage from './components/ErrorPage/ErrorPage';
import './App.css';

function App() {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/resume' component={Resume}/>
        <Route component={ErrorPage}/>
      </Switch>
    </main>
  );
}

export default App;
