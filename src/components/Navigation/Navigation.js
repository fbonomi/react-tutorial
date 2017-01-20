import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';

import './Navigation.css';

// <Link to="/about"></Link>

class Navigation extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>                        
                        <Link to={'/'}>Test React App</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <li role="presentation" className={this.props.menuItem === 'home' ? 'active' : ''}>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li role="presentation" className={this.props.menuItem === 'about' ? 'active' : ''}>
                        <Link to={'about'}>About</Link>
                    </li>
                    <li role="presentation" className={this.props.menuItem === 'info' ? 'active' : ''}>
                        <Link to={'info'}>Info</Link>
                    </li>
                    <li role="presentation" className={this.props.menuItem === 'users' ? 'active' : ''}>
                        <Link to={'users'}>Users</Link>
                    </li>
                </Nav>
            </Navbar>
        );
    }
}

export default Navigation;