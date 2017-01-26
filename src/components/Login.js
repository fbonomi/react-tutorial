import React from 'react';
import { findDOMNode } from 'react-dom';
import { browserHistory } from 'react-router';
import { Button, FormGroup, FormControl } from 'react-bootstrap';

import Navigation from '../core/Navigation';

const Login = React.createClass({
    handleSubmit(e) {
        e.preventDefault();
        let params = {
            userLogin: findDOMNode(this.refs.username).value,
            password: findDOMNode(this.refs.password).value,
            termID: ''
        }
        Navigation.login('urlgi', 1, params, (response) => {
            // TODO - settare qualcosa nell'environment
            browserHistory.push('/');
        });
    },
    render() {
        return (
            <div className="well" style={ { 'padding': '50px 30px' } }>
                <h3 style={ { margin: '0 0 20px 0' } }>
                    Sign in to start your session
                </h3>
                <form onSubmit={this.handleSubmit} ref="commentForm">
                    <div>
                        <FormGroup controlId="surname">
                            <FormControl type="text" placeholder="username" ref="username" />
                        </FormGroup>
                        <FormGroup controlId="surname">
                            <FormControl type="password" placeholder="password" ref="password" />
                        </FormGroup>
                    </div>
                    <div>
                        <Button type="submit" bsStyle="primary" onClick={this.signIn}>Sign in</Button>
                    </div>
                </form>
            </div>
        );
    }

});

export default Login;