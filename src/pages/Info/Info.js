import React, { Component } from 'react';
import BaseLayout from '../../layouts/Base/Base';

class Info extends Component {
    render() {
        return (
            <div>
                <BaseLayout title="Info" menuItem="info">
                    <p>Welcome to Info page!!!</p>
                </BaseLayout>
            </div>
        );
    }
}

export default Info;