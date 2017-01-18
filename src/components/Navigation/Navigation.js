import React, { Component } from 'react';
import { Link } from 'react-router';
import './Navigation.css';

class Navigation extends Component {
    render() {
        return (
            <div>
                <ul className="navigation" role="nav">
                    <li>
                        <Link to="/" className={this.props.menuItem == 'home' ? 'selected' : ''}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className={this.props.menuItem == 'about' ? 'selected' : ''}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/info" className={this.props.menuItem == 'info' ? 'selected' : ''}>
                            Info
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Navigation;