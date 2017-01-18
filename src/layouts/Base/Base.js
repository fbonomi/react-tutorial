import React, { Component } from 'react';
import logo from './logo.svg';
import Navigation from '../../components/Navigation/Navigation';

import './Base.css';

class Base extends Component {
    render() {
        return (
            <div>
                <Navigation menuItem={this.props.menuItem} />
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2 title={this.props.title}>{this.props.title}</h2>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default Base;