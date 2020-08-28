import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Multiplier from './components/Multiplier';
import EvenClicks from './components/EvenClicks';
import CountBy from './components/CountBy';
import HideMe from './components/HideMe';
import MinimumLength from './components/MinimumLength';
import Footer from './components/Footer';

const App = () => (
  <Router>
    <main className="container">
      <Multiplier x={ 5 } y ={ 7 } />
      <Route path='/even-clicks'>
        <EvenClicks />
      </Route>
      <Route path='/count-by/:step' render={ ({ match }) => (
        <CountBy step={ match.params.step } />
      )} />
      <Route path='/hide-me'>
        <HideMe>Blah blah blah</HideMe>
      </Route>
      <MinimumLength length={ 30 } />
    </main>
    <Footer />
  </Router>

);

export default App;
