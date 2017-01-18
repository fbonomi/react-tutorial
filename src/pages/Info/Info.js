import React, { Component } from 'react';
import BaseLayout from '../../layouts/Base/Base';
import Navigation from '../../components/Navigation/Navigation';

class Info extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <BaseLayout title="Info">
                    <p>Welcome to Info page!!!</p>
                </BaseLayout>
            </div>
        );
    }
}

export default Info;