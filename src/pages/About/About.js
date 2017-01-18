import React, { Component } from 'react';
import BaseLayout from '../../layouts/Base/Base';

class About extends Component {
    render() {
        return (
            <div>
                <BaseLayout title="About" menuItem="about">
                    <p>Welcome to ABOUT page!!!</p>
                </BaseLayout>
            </div>
        );
    }
}

export default About;