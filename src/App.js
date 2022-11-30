import React, { useState } from 'react';
import './css/App.css';
import { ReactComponent as MetaMask } from './medias/metamask.svg';
import Header from './components/Header';
import HomeNav from './components/HomeNav';
import Main from './components/MainContent';
import Footer from './components/Footer';

function checkAccounts(curAccount, accounts, setStatus, setAccount) {
  if (accounts.length < 1) {
    setStatus(false);
  } else if (accounts[0] !== curAccount) {
    setAccount(accounts[0])
    setStatus(true);
  }
}

function App() {

  let [account, setAccount] = useState('');
  let [status, setStatus] = useState(false);
  let htmlContent;

  if (typeof window.ethereum !== "undefined" ) {
    window.ethereum.request({ method: 'eth_accounts' }).then((accounts) => {
      checkAccounts(account, accounts, setStatus, setAccount);
    }).catch(console.error);
  
    window.ethereum.on('accountsChanged', (accounts) => {
      checkAccounts(account, accounts, setStatus, setAccount);
      window.location.reload();
    });

    window.ethereum.on('chainChanged', (chains) => {
      window.location.reload();
    });

    if ( !status && ( account === "" || !account ) ) { 
      htmlContent = <>
          <div className="App">
            <div className="base container mx-auto flex row" {...{ ":style": "editModal ? 'filter: blur(15px)' : ''" }}>
              <h2 aria-level="2" role="heading">
              </h2>
              <Header Connected={status}/>
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
    } else if( status && account !== "undefined" ) {
      htmlContent = <div className="App">
        <input type="hidden" id="accountID" value={account} />
        <div className="base container mx-auto flex row" {...{ ":style": "editModal ? 'filter: blur(15px)' : ''" }}>
          <h2 aria-level="2" role="heading">
          </h2>
          <Header Connected={status}/>
          <Main />
        </div>
        
        <Footer />
      </div>;
    }
  
    return (htmlContent);
  } else {
    return <>
      <div className="flex h-screen">
        <div className="m-auto text-center grid grid-rows-3">
          <MetaMask />
          <h2 className='font-medium text-lg text-center text-white'>MetaMask is not currently installed</h2>
          <a className="btn rounded-full" href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn" target="_blank">Install here</a>
        </div>
      </div>
    </>;
  }
}

export default App;
