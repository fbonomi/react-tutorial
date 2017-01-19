import React, { Component } from 'react';
import BaseLayout from '../../layouts/Base/Base';

import UsersFilter from './UsersFilter/UsersFilter';
import UsersForm from './UsersForm/UsersForm';
import UsersList from './UsersList/UsersList';

class Users extends Component {
    render() {
        return (
            <div>
                <BaseLayout title="Users" menuItem="users">
                    <UsersFilter />
                    <UsersForm />
                    <UsersList />
                </BaseLayout>
            </div>
        );
    }
}

export default Users;