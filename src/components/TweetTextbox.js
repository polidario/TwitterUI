import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarning } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { sendTweet, editTweet } from './TwitterFunction';


class TweetTextbox extends React.Component {
    constructor(props) {
        super(props);
        this.textRef = React.createRef();
        this.idRef = React.createRef();

        this.state = {
            textboxContent: '',
            id: ''
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if( prevState.textboxContent !== this.state.textboxContent ) {
            this.textboxOnChange();
        }
    }

    sendTweetFunction(type) {
        let content = '';
        let id;

        switch(type) {
            case "create":
                content = document.getElementById("tweetContentTB__main").value;

                if( content != '' ) {
                    sendTweet(content).then(() => { 
                        document.getElementById("tweetContentTB__main").value = "";
                        this.setState({ textboxContent: "" });
                    });
                }
                
                break;
            case "update":
                content = this.textRef.current.value;
                id = this.idRef.current.value;
                editTweet(id, content);
                break;
            default:
                return;
        }
    }

    textboxOnChange() {
        let textbox = this.textRef.current.value;
        let id = this.idRef.current.value;
        this.setState({ textboxContent: textbox, id: id });
    }

    render() {
        return (
            <form id="sendTweetForm" onSubmit={(e) => { e.preventDefault(); this.sendTweetFunction(this.props.type); } }>
                <input ref={this.idRef} type="hidden" name="edit_tweet_id"/>
                <div className="flex">
                    <div className="m-2 w-10 py-1">
                        <img className="inline-block h-10 w-10 rounded-full" src="https://picsum.photos/id/1/200/200?grayscale&blur=10" alt="" />
                    </div>
                    <div className="flex-1 px-2 pt-2 mt-2">
                        <textarea ref={this.textRef} onChange={() => { this.textboxOnChange() }} id="tweetContentTB__main" className="tweet-textbox" rows="2" cols="50" placeholder="What's happening?">

                        </textarea>
                    </div>                    
                </div>
                
                <div className="flex">
                    <div className="w-10"></div>

                    <div className="w-64 px-2">
                        
                        <div className="flex items-center">
                            <div className="text-center px-1 py-1 m-2">
                                <span className="mt-1 flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:text-blue-400">
                                    <FontAwesomeIcon icon={faWarning} className="mr-2"/>
                                    Lorem ipsum
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1">
                        <button type="submit" {...{ "disabled": this.state.textboxContent ? "": "disabled"}} {...{ "className": this.state.textboxContent ? "btn rounded-full mr-8 float-right": "btn-disabled rounded-full mr-8 float-right"}}>
                            Tweet
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}

export default TweetTextbox;