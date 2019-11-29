import React from 'react';
import UsersList from "./UsersList";
import { fetchUsers } from '../../services/UserServices';
import Grid from './Grid'

class UsersPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []

        };
    }

    componentDidMount() {
        fetchUsers().then((users) => { this.setState({ users: users }) })
    }

    render() {

        if (this.props.isGrid) {
            return <Grid users={this.state.users} />
        }

        return <UsersList users={this.state.users} />

    }
}



export default UsersPage;


