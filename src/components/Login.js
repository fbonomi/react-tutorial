import React from 'react';
import { Link } from 'react-router';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const Login = React.createClass({

    render() {
        return (
            <div className="well" style={ { 'padding': '50px 30px' } }>
                <h3 style={ { margin: '0 0 20px 0' } }>
                    Sign in to start your session
                </h3>
                <div>
                    <FormGroup controlId="surname">
                        <FormControl type="text" placeholder="username" />
                    </FormGroup>
                    <FormGroup controlId="surname">
                        <FormControl type="password" placeholder="password" />
                    </FormGroup>
                </div>
                <div>
                    <Link to="/">
                        <Button bsStyle="primary">
                            Sign in
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }
});

export default Login;