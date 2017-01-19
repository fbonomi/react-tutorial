import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

class UsersList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: []
        };
    }

    componentDidMount() {
        // TODO - sostituire con chiamata ajax
        var users = [
            { id: 1, name: 'Federico' }, { id: 2, name: 'Mattia' }, { id: 3, name: 'Alessandro' },
        ]
        this.setState({ users })
    }

    render() {
        return (
            <Panel header="Users List">
                <ul>
                    {this.state.users.map(user =>
                        <li key={user.id}>
                            (<strong>{user.id}</strong>) {user.name}
                        </li>
                    )}
                </ul>
            </Panel>
        );
    }
}

export default UsersList;