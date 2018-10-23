import React from 'react';

const Work = () => {
    return (
        <div className="Work">
            <div>
                <h3>Flatiron Feelz</h3>
                <h2>A blogging platform to share your feelings by taking a selfie, choosing a spirit dog, writing a blog post, and chatting.</h2>
                <ul>
                    <li>Created a Ruby on Rails RESTful API backend with a React.js frontend designed with custom CSS and Ant Design</li>
                    <li>Used WebRTC API to access the webcam on Google Chrome and then upload the image using the Imgur API</li>
                    <li>Maintained a persistent connection for the chatroom feature through Action Cable implementing WebSockets</li>
                    <li>Designed Postgres database schema using object-oriented programming and ActiveRecord for associations</li>
                </ul>
            </div>
        </div>
    )
}

export default Work