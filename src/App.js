import React from 'react';
import './App.css';

import Multiplier from './components/Multiplier';
import EvenClicks from './components/EvenClicks';
import CountBy from './components/CountBy';
import HideMe from './components/HideMe';
import MinimumLength from './components/MinimumLength';

const App = () => (
  <main className="container">
    <Multiplier x={ 5 } y ={ 7 } />
    <EvenClicks />
    <CountBy step={ 5 } />
    <HideMe>Blah blah blah</HideMe>
    <MinimumLength length={ 30 } />
  </main>
);

export default App;
