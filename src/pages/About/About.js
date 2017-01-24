import React, { Component } from 'react';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';

class About extends Component {
    componentDidMount() {
        this.props.setPage('about');
    }

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