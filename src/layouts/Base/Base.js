import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import logo from './logo.svg';
import Navbar from '../../components/Navbar/Navbar';

import './Base.css';

class Base extends Component {
    render() {
        return (
            <div>
                <Navbar menuItem={this.props.menuItem} />
                <Jumbotron>
                    <div className="container">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 title={this.props.title}>{this.props.title}</h1>
                    </div>
                </Jumbotron>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Base;