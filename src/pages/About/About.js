import React, { Component } from 'react';
import BaseLayout from '../../layouts/Base/Base';
import Navigation from '../../components/Navigation/Navigation';

class About extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <BaseLayout title="About">
                    <p>Welcome to ABOUT page!!!</p>
                </BaseLayout>
            </div>
        );
    }
}

export default About;