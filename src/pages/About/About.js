import React, { Component } from 'react';

class About extends Component {
    componentDidMount() {
        this.props.setPage('about', 'About');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <p>Welcome to ABOUT page!!!</p>
                </div>
            </div>
        );
    }
}

export default About;