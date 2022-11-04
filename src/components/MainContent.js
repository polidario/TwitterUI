import React, { useState } from 'react';
import HomeNav from './HomeNav';
import Tweet from './Tweet';
import TweetTextbox from './TweetTextbox';
import { fetchTweets } from './TwitterFunction';

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: ''
        }

        
    }

    componentDidMount() {
        this.state.array = (fetchTweets().then(response => 
            this.setState({ array: response })
        ));
    }


    render() {
        return <main role="main" className="base flex-auto">
                    <div className="w-full md:max-lg:w-2/3 border border-gray-600 h-auto  border-t-0">
                    
                        <HomeNav />

                        <hr className="border-gray-600" />

                        <TweetTextbox />

                        <hr className="border-gray-600 mt-4" />

                        {
                            console.log(this.state.data)
                        }
                    </div>
            </main>
    }
}

export default Main;