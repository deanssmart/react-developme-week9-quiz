import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Multiplier from './components/Multiplier';
import EvenClicks from './components/EvenClicks';
import CountBy from './components/CountBy';
import HideMe from './components/HideMe';
import MinimumLength from './components/MinimumLength';
import Footer from './components/Footer';
import FourOhFour from './components/FourOhFour';

const App = () => (
  <Router>
    <main className="container">
      <Switch>
        <Route exact path='/'>
          <Multiplier x={ 5 } y ={ 7 } />
          <EvenClicks />
          <CountBy step={ 5 } />
          <HideMe>Blah blah blah</HideMe>
          <MinimumLength length={ 30 } />
        </Route>
        <Route path='/multiplier/:x/:y' render={ ({ match }) => (
          <Multiplier x={ match.params.x } y ={ match.params.y } />
        )} />
        <Route path='/even-clicks'>
          <EvenClicks />
        </Route>
        <Route path='/count-by/:step' render={ ({ match }) => (
          <CountBy step={ match.params.step } />
        )} />
        <Route path='/hide-me'>
          <HideMe>Blah blah blah</HideMe>
        </Route>
        <Route path='/minimum/:length' render={ ({ match }) => (
          <MinimumLength length={ match.params.length } />
        )} />
        <FourOhFour />
      </Switch>
    </main>
    <Footer />
  </Router>

);

export default App;
