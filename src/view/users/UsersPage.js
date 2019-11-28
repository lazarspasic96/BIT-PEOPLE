import React from 'react';
import UsersList from "./UsersList";
import { fetchUsers } from '../../services/UserServices'

class UsersPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        };
    }

    loadUsers() {
        fetchUsers().then((users) => { this.setState({ users: users }) })
    }



    render() {
        return (
            <>
                <button onClick={(event) => {
                    return this.loadUsers()

                }


                }>Reload</button>
                <UsersList users={this.state.users} />
            </>
        )
    }
}



export default UsersPage;