import React from 'react';
import './css/App.css';

import Header from './components/Header';
import Main from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      
      <div className="base container mx-auto flex row" {...{ ":style": "editModal ? 'filter: blur(15px)' : ''" }}>
        <h2 aria-level="2" role="heading">
        </h2>
        <Header/>
        <Main />
      </div>

      <Footer />
    </div>
  );
}

export default App;
