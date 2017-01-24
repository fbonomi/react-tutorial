import React, { Component } from 'react';

import UsersFilter from './UsersFilter/UsersFilter';
import UsersForm from './UsersForm/UsersForm';
import UsersList from './UsersList/UsersList';

class Users extends Component {
    componentDidMount() {
        this.props.setPage('users', 'Users');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <UsersFilter />
                    <UsersForm />
                    <UsersList />
                </div>
            </div>
        );
    }
}

export default Users;