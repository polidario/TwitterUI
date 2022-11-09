import React from "react";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { removeTweet } from "./TwitterFunction";

class Tweet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tweets: [],
            date: new Date()
        }
    }

    componentDidMount() {

        this.props.data.then((response) => {
            const obj = JSON.parse(response);
            this.setState({ tweets: obj });
        });
    }
    
    render() {
        return (
            <>
              {this.state.tweets.map((item, index) => { 
                //console.log(item, index);
                return <div key={index}>
                        <div className="flex flex-shrink-0 p-4 pb-0">
                            <a href="#" className="flex-shrink-0 group block">
                                <div className="flex items-center">
                                    <div>
                                    <img className="inline-block h-10 w-10 rounded-full" src="https://picsum.photos/id/1/200/300" alt="" />
                                    </div>
                                    <div className="ml-3">
                                    <p className="base-text text-base leading-6 font-medium text-white">
                                        <div className="max-w-[178px] truncate"><span className="base-text break-normal">{item[2]}</span></div>
                                        <span className="base-text break-normal text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                                            @LoremIpsum. {item.tweetTime}
                                        </span>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="pl-16 pr-8">
                            <p className="text-base width-auto font-medium text-white flex-shrink">
                                {item[3]}
                            </p>

                            <div className="flex">
                                <div className="w-full">
                                    <div className="flex items-start">
                                        <div className="text-center py-2 m-2">
                                            <a href="#" className="w-12 mt-1 group justify-center flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800/25 hover:text-blue-300">
                                                <FontAwesomeIcon icon={faPencilAlt} className="h-[1em]" />
                                            </a>
                                        </div>

                                        <div className="text-center py-2 m-2">
                                            <button onClick={removeTweet(item)} className="w-12 mt-1 group justify-center flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800/25 hover:text-blue-300">
                                                <FontAwesomeIcon icon={faTrash} className="h-[1em]" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            
                            </div>
                            
                        </div>
                    </div>
               })}
            </>
          );
    }
}

export default Tweet;