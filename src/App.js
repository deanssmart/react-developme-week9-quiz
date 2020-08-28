import React from 'react';
import './App.css';

import Multiplier from './components/Multiplier';
import EvenClicks from './components/EvenClicks';

const App = () => (
  <>
    <Multiplier x={ 7 } y ={ 7 } />
    <EvenClicks />
  </>
);

export default App;
