import { ethers } from 'ethers';

import abi from '../utils/Twitter.json';

const TWEETER_ADDRESS = '0xE548C00051Ec585B8010AF8686De71269ce3B42d';

async function removeTweet(item) {
    if (typeof window.ethereum !== "undefined" ) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(TWEETER_ADDRESS, abi.abi, provider.getSigner());

        //console.log(item[0]["hex"]);
        const id = item["id"]["_hex"];
        const data = await contract.remove(id);
        console.log(data);
        return data;
    }
}
//function editTweet(uint index, string calldata newMessage)
async function editTweet(id, message) {
    if (typeof window.ethereum != "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(TWEETER_ADDRESS, abi.abi, provider.getSigner());

        const data = await contract.editTweet(id, message);
        window.location.reload();
        console.log(data);

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

export {fetchTweets, sendTweet, editTweet, removeTweet};