import React, { useState } from 'react';
import './css/App.css';

import Header from './components/Header';
import HomeNav from './components/HomeNav';
import Main from './components/MainContent';
import Footer from './components/Footer';

function App() {

  let [account, setAccount] = useState('');
  let [status, setStatus] = useState();

  window.ethereum.request({ method: 'eth_accounts' }).then((accounts) => {
    if (accounts.length < 1) {
      setStatus(false);
    } else if (accounts[0] !== account) {
      setAccount(accounts[0])
      setStatus(true);
    }
  }).catch(console.error);

  window.ethereum.on('accountsChanged', (accounts) => {
    window.location.reload();
  });

  let htmlContent;

  if ( !status && account.length == 0) { 
    htmlContent = <>
        <div className="App">
      
          <div className="base container mx-auto flex row" {...{ ":style": "editModal ? 'filter: blur(15px)' : ''" }}>
            <h2 aria-level="2" role="heading">
            </h2>
            <Header />
            <main role="main" className="base flex-auto">
              <div className="w-full md:max-lg:w-2/3 border border-gray-600 h-auto  border-t-0">
                      <HomeNav />

                      <hr className="border-gray-600" />
                      <div className='py-5'>
                        <p className='font-bold text-2xl text-center'>You are not connected to Metamask</p>
                      </div>
                  </div>
            </main>
          </div>
        </div>
      </>;
  } else {
    htmlContent = <div className="App">
      <div className="base container mx-auto flex row" {...{ ":style": "editModal ? 'filter: blur(15px)' : ''" }}>
        <h2 aria-level="2" role="heading">
        </h2>
        <Header />
        <Main />
      </div>
      
      <Footer />
    </div>;
  }

  return (htmlContent);
}

export default App;
