import React, { useMemo, useState } from 'react';
import { getLikes, removeTweet, likeTweet, dislikeTweet } from "./TwitterFunction";

import { faPencilAlt, faTrash, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";

function getCurrentTweet(tweet) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const modal = document.querySelector("#editTweetModal");
    modal.querySelector("#tweetContentTB__main").value = tweet.tweet;
    Array.from(document.querySelectorAll("[name='edit_tweet_id']")).map((input) => {
        input.value = tweet.id._hex;
    });
}

export default function TweetCard(props) {
    const id = props.id;

    const date = useMemo(() => {
        const d = new Date(parseInt(props.tweet["tweetTime"]["_hex"], 16) * 1000);
        return moment(d).fromNow();
    }, [props.tweet]);

    const [liked, setLiked] = useState(false);

    getLikes(props.tweet["id"]["_hex"]).then((response) => {
        setLiked(response.map((value) => {
            return value.toLowerCase()
        }).includes(id.toLowerCase()));
    })
    const senderAddress = props.tweet['senderAddress'];
    const canUpdate = id.toLowerCase() == senderAddress.toLowerCase();

    return <div key={props.index}>
                <div className="flex flex-shrink-0 p-4 pb-0">
                    
                    <a href={"https://goerli.etherscan.io/address/" + senderAddress} className="flex-shrink-0 group block" target="_blank">
                        <div className="flex items-center">
                            <div>
                            <img className="inline-block h-10 w-10 rounded-full" src={"https://picsum.photos/200/200/?blur=10&random=" + props.index} alt="" />
                            </div>
                            <div className="ml-3">
                                <div className="base-text text-base leading-6 font-medium text-white">
                                    <div className="max-w-[178px] truncate"><span className="base-text break-normal">{senderAddress}</span></div>
                                    <span className="tweet-handle">
                                        @{props.tweet["id"]["_hex"]}. {date}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="pl-16 pr-8">
                    <p className="text-base width-auto font-medium text-white flex-shrink">
                        {props.tweet["tweet"]}
                    </p>

                    <div className="flex">
                        <div className="w-full">
                            <div className="flex items-start">
                                <div className="text-center py-2 m-2">
                                    <button onClick={
                                        () => { 
                                            liked ? 
                                                dislikeTweet(props.tweet["id"]["_hex"])
                                                : likeTweet(props.tweet["id"]["_hex"]);
                                        }} 
                                        {...{ "style": liked ? { color: '#d4235a' } : {} }}
                                        className="tweet-actions-btn justify-center flex items-center group">
                                        <FontAwesomeIcon icon={faHeart} className="h-[1em]" />
                                    </button>
                                </div>

                                {canUpdate ? <>
                                    <div className="text-center py-2 m-2">
                                        <button onClick={() => getCurrentTweet(props.tweet)} {...{ "x-on:click": "editModal = ! editModal" }} className="tweet-actions-btn justify-center flex items-center group">
                                            <FontAwesomeIcon icon={faPencilAlt} className="h-[1em]" />
                                        </button>
                                    </div>

                                    <div className="text-center py-2 m-2">
                                        <button onClick={() => removeTweet(props.tweet)} className="tweet-actions-btn justify-center flex items-center group">
                                            <FontAwesomeIcon icon={faTrash} className="h-[1em]" />
                                        </button>
                                    </div>
                                </> : <></>}
                        </div>
                        </div>
                    </div>

                </div>
            </div>
}

