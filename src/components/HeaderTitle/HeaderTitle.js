import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import logo from './logo.svg';

import './HeaderTitle.css';

class HeaderTitle extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <div className="container">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 title={this.props.page.title}>{this.props.page.title}</h1>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}

export default HeaderTitle;