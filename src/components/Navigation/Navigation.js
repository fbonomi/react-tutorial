import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './Navigation.css';

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
                    <NavItem eventKey={3} href="/#/users" className={this.props.menuItem === 'users' ? 'active' : ''}>
                        Users
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default Navigation;