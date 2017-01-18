import React, { Component } from 'react';
import './Base.css';
import logo from './logo.svg';

class Base extends Component {
    render() {
        return (
            <div className="foo">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>{this.props.title}</h2>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default Base;