import React from 'react';
import { ethers } from "ethers";

class Connection extends React.Component {

    render() {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const request = provider.send("eth_requestAccounts", []);
        console.log(signer);

        return(
            <></>
        )
    }
}

export default Connection;