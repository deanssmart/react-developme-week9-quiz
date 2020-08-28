import React from 'react';
import './App.css';

import Multiplier from './components/Multiplier';
import EvenClicks from './components/EvenClicks';
import CountBy from './components/CountBy';

const App = () => (
  <>
    <Multiplier x={ 5 } y ={ 7 } />
    <EvenClicks />
    <CountBy step={ 5 } />
  </>
);

export default App;
