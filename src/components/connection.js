import { ethers } from 'ethers';

function Connect() {
    const { ethereum } = window;

    if( ethereum ) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        if( !window.ethereum._state.account ) {
            const request = provider.send("eth_requestAccounts", []); 
        } else {
            console.log("You are already connected", window.ethereum._state.account);
        }
    } else {
        console.log("You don't have MetaMask installed or it might be disabled at the moment.");
    }
    
 
}

export default Connect;