import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import axios from 'axios';

class UsersList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: []
        };
    }

    _editHandler() {
        alert("edit user")
    }

    componentDidMount() {
        axios.get(`http://www.reddit.com/r/beef.json`)
            .then(res => {
                const users = res.data.data.children.map(obj => obj.data).slice(0, 15);
                console.log(users);
                this.setState({ users });
            });
    }

    render() {
        return (
            <Panel header="Users List">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Author</th>
                            <th>Title</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map(user =>
                            <tr data-id={user.id}>
                                <td>
                                    { user.thumbnail != 'self' && user.thumbnail != 'default'
                                        ? <img src={user.thumbnail} alt="" width="50" />
                                        : null }
                                </td>
                                <td>{user.author}</td>
                                <td>{user.title}</td>
                                <td className="text-right">
                                    <span
                                        onClick={this._editHandler}
                                        title="Edit" style={ { cursor: 'pointer' } }
                                        className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </Panel>
        );
    }
}

export default UsersList;