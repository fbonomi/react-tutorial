import React, { Component } from 'react';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';

import UsersFilter from './UsersFilter/UsersFilter';
import UsersForm from './UsersForm/UsersForm';
import UsersList from './UsersList/UsersList';

class Users extends Component {
    componentDidMount() {
        this.props.setPage('users');
    }

    render() {
        return (
            <div>
                <HeaderTitle title="Users" menuItem="users" />
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