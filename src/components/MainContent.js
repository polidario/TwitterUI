import React, { useState } from 'react';
import HomeNav from './HomeNav';
import Tweet from './Tweet';
import TweetTextbox from './TweetTextbox';
import { fetchTweets } from './TwitterFunction';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.tweets = "";
        this.tweets = fetchTweets().then((response) => {
            return JSON.stringify(response);
        });

        this.state = {
            jsonTweets: ''
        }
    }

    componentDidMount() {
        fetchTweets().then((result) => this.setState({
            jsonTweets: JSON.stringify(result)
        }))
    }

    render() {
        return <main role="main" className="base flex-auto">
                    <div className="w-full md:max-lg:w-2/3 border border-gray-600 h-auto">
                    
                        <HomeNav />

                        <hr className="border-gray-600" />

                        <TweetTextbox type="create"/>

                        <hr className="border-gray-600 mt-4" />

                        <Tweet data={this.tweets} />
                    </div>

                    <script type="application/json">
                        {this.state.jsonTweets}
                    </script>
            </main>
    }
}

export default Main;