import React, { Component } from 'react';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';

class About extends Component {
    render() {
        return (
            <div>
                <HeaderTitle title="About" menuItem="about" />
                <div className="container">
                    <p>Welcome to ABOUT page!!!</p>
                </div>
            </div>
        );
    }
}

export default About;