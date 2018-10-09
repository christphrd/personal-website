import React from 'react';

class About extends React.Component {
    componentDidMount() {
        this.props.history.push('/about')
    }

    render() {
        return (
            <div className="About">
                About
            </div>
        )
    }
}

export default About