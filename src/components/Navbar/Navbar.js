import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router';

import './Navbar.css';

class Navigation extends Component {
    handleLogout() {
        // TODO - gestire distruzione cookie
        browserHistory.push('/auth/login');
    }

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
                        <li role="presentation" className={this.props.page.menuItem === 'home' ? 'active' : ''}>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li role="presentation" className={this.props.page.menuItem === 'about' ? 'active' : ''}>
                            <Link to={'about'}>About</Link>
                        </li>
                        <li role="presentation" className={this.props.page.menuItem === 'info' ? 'active' : ''}>
                            <Link to={'info'}>Info</Link>
                        </li>
                        <li role="presentation" className={this.props.page.menuItem === 'users' ? 'active' : ''}>
                            <Link to={'users'}>Users</Link>
                        </li>
                        <li role="presentation" className={this.props.page.menuItem === 'photo_grid' ? 'active' : ''}>
                            <Link to={'photo_grid'}>Photo grid</Link>
                        </li>
                    </Nav>
                    <Nav pullRight>
                        <li role="presentation">
                            <Link to="javascript:void(0)" onClick={this.handleLogout}>
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