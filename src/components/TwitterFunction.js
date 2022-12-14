import { ethers } from 'ethers';
import abi from '../utils/Twitter.json';
const TWEETER_ADDRESS = process.env.REACT_APP_CONTRACT_ADDRESS;

async function getLikes(id) {
    if (typeof window.ethereum !== "undefined") {
        //ethereum is usable get reference to the contract
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(TWEETER_ADDRESS, abi.abi, provider.getSigner());

        const data = await contract.getLikes(id);
        return data;
    }
}

async function likeTweet(id) {
    if (typeof window.ethereum !== "undefined" ) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(TWEETER_ADDRESS, abi.abi, provider.getSigner());

        const data = await contract.likeTweet(id);
        return data;
    }
}

async function dislikeTweet(id) {
    if (typeof window.ethereum !== "undefined" ) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(TWEETER_ADDRESS, abi.abi, provider.getSigner());
        
        const data = await contract.unlikeTweet(id);
        return data;
    }
}

async function removeTweet(item) {
    if (typeof window.ethereum !== "undefined" ) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(TWEETER_ADDRESS, abi.abi, provider.getSigner());

        const id = item["id"]["_hex"];
        const data = await contract.remove(id);
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

export {fetchTweets, sendTweet, editTweet, removeTweet, likeTweet, dislikeTweet, getLikes};