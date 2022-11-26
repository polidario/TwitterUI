import React, { useState } from "react";
import { faPencilAlt, faTrash, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fetchTweets, removeTweet } from "./TwitterFunction";
import moment from "moment";

function getCurrentTweet(tweet) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const modal = document.querySelector("#editTweetModal");
    modal.querySelector("#tweetContentTB__main").value = tweet.tweet;
    Array.from(document.querySelectorAll("[name='edit_tweet_id']")).map((input) => {
        input.value = tweet.id._hex;
    });
}

function sorter(a, b) {
    const time1 = parseInt(a["tweetTime"]["_hex"], 16);
    const time2 = parseInt(b["tweetTime"]["_hex"], 16);

    return new Date(time2).getTime() - new Date(time1).getTime();
 }

export default function Tweet() {
    const [tweets, addTweet] = useState([]);

    fetchTweets().then(response => {
        addTweet(response);
    })

    const id = document.getElementById("accountID") ? document.getElementById("accountID").value : 'null';
    
    let sortedTweet = [...tweets];
    sortedTweet.sort(sorter);

    return (
        <>
            {sortedTweet.map((item, index) => { 
                const date = new Date(parseInt(item["tweetTime"]["_hex"], 16) * 1000);
                const d = moment(date).fromNow();
                let actions = '';

                if(id.toLowerCase() === item["senderAddress"].toLowerCase()) {
                    actions = <>
                        <div className="text-center py-2 m-2">
                            <button onClick={() => getCurrentTweet(item)} {...{ "x-on:click": "editModal = ! editModal" }} className="w-12 mt-1 group justify-center flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800/25 hover:text-blue-300">
                                <FontAwesomeIcon icon={faPencilAlt} className="h-[1em]" />
                            </button>
                        </div>

                        <div className="text-center py-2 m-2">
                            <button onClick={() => removeTweet(item)} className="w-12 mt-1 group justify-center flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800/25 hover:text-blue-300">
                                <FontAwesomeIcon icon={faTrash} className="h-[1em]" />
                            </button>
                        </div>
                    </>
                }

                return <div key={index}>
                        <div className="flex flex-shrink-0 p-4 pb-0">
                            
                            <a href="#" className="flex-shrink-0 group block">
                                <div className="flex items-center">
                                    <div>
                                    <img className="inline-block h-10 w-10 rounded-full" src={"https://picsum.photos/200/200/?blur=10&random=" + index} alt="" />
                                    </div>
                                    <div className="ml-3">
                                        <div className="base-text text-base leading-6 font-medium text-white">
                                            <div className="max-w-[178px] truncate"><span className="base-text break-normal">{item[2]}</span></div>
                                            <span className="base-text break-normal text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                                                @{item["id"]["_hex"]}. {d}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="pl-16 pr-8">
                            <p className="text-base width-auto font-medium text-white flex-shrink">
                                {item["tweet"]}
                            </p>

                            <div className="flex">
                                <div className="w-full">
                                    <div className="flex items-start">
                                        <div className="text-center py-2 m-2">
                                            <button onClick={() => console.log("Liked")} className="w-12 mt-1 group justify-center flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800/25 hover:text-blue-300">
                                                <FontAwesomeIcon icon={faHeart} className="h-[1em]" />
                                            </button>
                                        </div>

                                        {actions}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                })
            }
        </>
    );

}