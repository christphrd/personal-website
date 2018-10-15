import React from 'react';

import blueSuit from '../img/blue-suit.jpg'

class About extends React.Component {
    componentDidMount() {
        this.props.history.push('/about')
    }

    render() {
        return (
            <div className="About">
                {/* <img src={blueSuit} alt="blue-suit"></img> */}
                <p>Full stack web developer with a strong quantitative background.With experience in Ruby on Rails, JavaScript, and React, I can build apps that manipulate data.I analyzed experimental data in chemistry.My background in tech support involved working with database integration software. I discovered my passion for coding as I grew in my last role.</p>
            </div>
        )
    }
}

export default About