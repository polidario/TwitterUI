import React, { useEffect, useMemo, useState } from "react";
import { fetchTweets } from "./TwitterFunction";
import TweetCard from './TweetCard';

function sorter(a, b) {
    const time1 = parseInt(a["tweetTime"]["_hex"], 16);
    const time2 = parseInt(b["tweetTime"]["_hex"], 16);

    return new Date(time2).getTime() - new Date(time1).getTime();
}

export default function Tweet() {
    const id = document.getElementById("accountID") ? document.getElementById("accountID").value : 'null';
    const [tweets, addTweet] = useState([]);

    useEffect(() => {
        fetchTweets().then(response => {
            addTweet(response);
        });
    });
    
    let sortedTweet = useMemo(() => {
        const t = [...tweets];
        t.sort(sorter);
        return t;
    }, [tweets]);

    return (
        <>
            {sortedTweet.map(
                (item, index) => { 
                    return <TweetCard key={index} tweet={item} id={id}/>
                })
            }
        </>
    );

}