import React from 'react';
import TweetTextbox from './TweetTextbox';

class Footer extends React.Component {
    render() {
        return(
            <footer>
                <div x-show="editModal">
                    <div id="editTweetModal" className="w-50 h-50 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10">
                        <div className="bg-gray-900 p-10 shadow-2xl rounded-lg">
                            <TweetTextbox type="update"/>
                        </div>
                    </div>
                    <div {...{ "x-on:click": "editModal = ! editModal" }}  className="w-full h-full absolute inset-0 bg-gray-900 opacity-50"></div>
                </div>
            </footer>
            
        )
    }
}

export default Footer;