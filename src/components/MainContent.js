import React, { useState } from 'react';
import HomeNav from './HomeNav';
import Tweet from './Tweet';
import TweetTextbox from './TweetTextbox';

class Main extends React.Component {

    render() {
        return <main role="main" className="base flex-auto">
                    <div className="w-full md:max-lg:w-2/3 border border-gray-600 h-auto">
                    
                        <HomeNav />

                        <hr className="border-gray-600" />

                        <TweetTextbox type="create"/>

                        <hr className="border-gray-600 mt-4" />

                        <Tweet />
                    </div>
            </main>
    }
}

export default Main;