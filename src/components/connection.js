import { ethers } from 'ethers';

function Connect() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    if(window.ethereum._state.accounts.length > 0 ) {
        console.log(window.ethereum._state);
        return;
    }

    if(window.ethereum._state.account == undefined) {
        const request = provider.send("eth_requestAccounts", []);   
    } else {
        console.log("You are already connected", window.ethereum._state.account);
    }

    console.log(window.ethereum._state)
    //const request = provider.send("eth_requestAccounts", []);   
}

export default Connect;