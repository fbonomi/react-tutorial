import React, { Component } from 'react';
import { Link } from 'react-router';
import './Navigation.css';

class Navigation extends Component {
    render() {
        return (
            <div>
                <ul className="navigation" role="nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/info">Info</Link></li>
                </ul>
            </div>
        );
    }
}

export default Navigation;