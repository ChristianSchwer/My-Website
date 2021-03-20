import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Navbar from './components/headerComponent/Navbar.js';
import Home from './components/pages/Home.js'
import Programming from './components/pages/Programming.js';
import Plants from './components/pages/Plants';
import Smith from './components/pages/Smith';
import Travel from './components/pages/Travel';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/programming' component={Programming} />
        <Route path='/plants' component={Plants} />
        <Route path='/smith' component={Smith} />
        <Route path='/travel' component={Travel} />
      </Switch>
    </Router>
  );
}

export default App;
