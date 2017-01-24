import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';
import { Link } from 'react-router';

// <Link to="/about"></Link>

class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to={'/'}>Test React App</Link>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <li role="presentation" className={this.props.page === 'home' ? 'active' : ''}>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li role="presentation" className={this.props.page === 'about' ? 'active' : ''}>
                            <Link to={'about'}>About</Link>
                        </li>
                        <li role="presentation" className={this.props.page === 'info' ? 'active' : ''}>
                            <Link to={'info'}>Info</Link>
                        </li>
                        <li role="presentation" className={this.props.page === 'users' ? 'active' : ''}>
                            <Link to={'users'}>Users</Link>
                        </li>
                        <li role="presentation" className={this.props.page === 'photo_grid' ? 'active' : ''}>
                            <Link to={'photo_grid'}>Photo grid</Link>
                        </li>
                    </Nav>
                    <Nav pullRight>
                        <li role="presentation">
                            <Link to={'/auth/login'}>
                                <span className="glyphicon glyphicon-log-out" aria-hidden="true"></span>
                                {'  '}
                                Logout
                            </Link>
                        </li>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;