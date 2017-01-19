import React, { Component } from 'react';
import { Link } from 'react-router';
import './Navigation.css';

import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import MenuItem from 'react-bootstrap/lib/MenuItem';

// <Link to="/about"></Link>

class Navigation extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/#/">Test React App</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="/#/" className={this.props.menuItem === 'home' ? 'active' : ''}>
                        Home
                    </NavItem>
                    <NavItem eventKey={2} href="/#/about" className={this.props.menuItem === 'about' ? 'active' : ''}>
                        About
                    </NavItem>
                    <NavItem eventKey={3} href="/#/info" className={this.props.menuItem === 'info' ? 'active' : ''}>
                        Info
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default Navigation;