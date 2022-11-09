import React from 'react';
import './css/App.css';

import Header from './components/Header';
import Main from './components/MainContent';

function App() {
  return (
    <div className="App">
      
      <div className="base container mx-auto flex row">
        <h2 aria-level="2" role="heading">
        </h2>
        <Header/>
        <Main />
      </div>
    </div>
  );
}

export default App;