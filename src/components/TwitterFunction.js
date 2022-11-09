import { ethers } from 'ethers';

import abi from '../utils/Twitter.json';

const TWEETER_ADDRESS = '0x3D4269B71849Dc22191e35C81397915E4294B029';

async function removeTweet(id) {
    if (typeof window.ethereum !== "undefined" ) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(TWEETER_ADDRESS, abi.abi, provider.getSigner());

        const data = await contract.remove(id);

        return data;
    }
}

async function fetchTweets() {
    if (typeof window.ethereum !== "undefined") {
        //ethereum is usable get reference to the contract
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(TWEETER_ADDRESS, abi.abi, provider.getSigner());
  
        const data = await contract.getTweets();
        
        return data;
    }
}

async function sendTweet(message) {
    if (typeof window.ethereum !== "undefined") {
        //ethereum is usable get reference to the contract
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(TWEETER_ADDRESS, abi.abi, provider.getSigner());
  
        const data = await contract.addTweet(message);
        return data;
    }
}
export {fetchTweets, sendTweet, removeTweet};