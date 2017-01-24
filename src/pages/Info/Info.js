import React, { Component } from 'react';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';

class Info extends Component {
    componentDidMount() {
        this.props.setPage('info', 'Info');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <p>Welcome to Info page!!!</p>
                </div>
            </div>
        );
    }
}

export default Info;