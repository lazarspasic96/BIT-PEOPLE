import React from 'react';
import UsersList from "./UsersList";
import { fetchUsers } from '../../services/UserServices';
import Grid from './Grid'
import ActionButtons from './ActionButtons'
import Search from './Search'


class UsersPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isGrid: false,
            users: [],
            query: ''
        };
    }

    onSearch = (val) => {
        this.setState({ query: val })

    }

    changeLayout = () => {
        this.buttonView()
        this.setState(prevState => {
            return {

                isGrid: !prevState.isGrid

            }
        })
    }



    componentDidMount() {
        fetchUsers().then((users) => { this.setState({ users: users }) })
    }

    refresh = () => {
        return (fetchUsers().then((users) => { this.setState({ users: users }) }))

    }

    buttonView = () => {
        this.setState(prevState => {
            return {
                buttonView: !prevState.buttonView
            }
        })
    }





    render() {
        const filteredUsers = this.state.users.filter(user => user
            .getName()
            .includes(this.state.query.toLowerCase()))

        if (this.state.isGrid) {
            return <>
                <div className="row">
                    <Search onSearch={this.onSearch} />
                    <ActionButtons changeLayout={this.changeLayout} refresh={this.refresh} isGrid={this.state.isGrid} />
                </div>
                <Grid users={filteredUsers} />
            </>
        }

        return <>
            <div className="row">
                <Search onSearch={this.onSearch} />
                <ActionButtons changeLayout={this.changeLayout} refresh={this.refresh} isGrid={this.state.isGrid} />

            </div>

            <UsersList users={filteredUsers} />
        </>
    }
}



export default UsersPage;


