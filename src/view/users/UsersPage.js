import React from 'react';
import UsersList from "./UsersList";
import { fetchUsers, fetchCachedUsers } from '../../services/UserServices';
import Grid from './Grid'
import ActionButtons from './ActionButtons'
import Search from './Search'
import { LoadingScreen } from "./LoadingScreen"
import NoMatch from './NoMatch';
import TimeAgo from 'react-timeago'

class UsersPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isGrid: false,
            users: [],
            query: '',
            isLoading: true
        };
    }

    onSearch = (val) => {
        this.setState({ query: val })

    }

    changeLayout = () => {

        this.setState(prevState => {
            return {
                isGrid: !prevState.isGrid
            }
        })

        localStorage.setItem("isGrid", !this.state.isGrid);

    }

    componentDidMount() {


        if (localStorage.getItem('isGrid')) {
            let isGrid = JSON.parse(localStorage.getItem('isGrid'));
            console.log(isGrid);
            this.setState({
                isGrid: isGrid
            });
        }

        fetchCachedUsers()
            .then(users => this.setState({ isLoading: false, users: users }));
    }

    refresh = () => {

        this.setState({ isLoading: true });

        return fetchUsers()
            .then(users => this.setState({ isLoading: false, users }))
    }



    render = () => {


        if (this.state.isLoading) {
            return <LoadingScreen />
        }

        const filteredUsers = this.state.users.filter(user => user
            .getName()
            .includes(this.state.query.toLowerCase()))

        const femaleSearch = filteredUsers.filter((element) => element.gender === 'female').length
        const maleSearch = filteredUsers.filter((element) => element.gender === 'male').length

        console.log(femaleSearch);


        if (filteredUsers.length === 0) {

            return <>
                <div className="row">
                    <Search onSearch={this.onSearch} />
                    <ActionButtons changeLayout={this.changeLayout} refresh={this.refresh} isGrid={this.state.isGrid} />
                </div>
                <NoMatch />
            </>
        }



        if (this.state.isGrid) {
            return <>
                <div className="row">
                    <Search onSearch={this.onSearch} />
                    <ActionButtons changeLayout={this.changeLayout} refresh={this.refresh} isGrid={this.state.isGrid} />
                    <p>{`Male: ${maleSearch} Female: ${femaleSearch}`}</p>
                </div>
                <Grid users={filteredUsers} />
                <p>   {<TimeAgo date={new Date(JSON.parse(localStorage.getItem("time")))} />}</p>
            </>
        }

        return <>
            <div className="row">
                <Search onSearch={this.onSearch} />
                <ActionButtons changeLayout={this.changeLayout} refresh={this.refresh} isGrid={this.state.isGrid} />
                <p>{`Male: ${maleSearch} Female: ${femaleSearch}`}</p>
            </div>

            <UsersList users={filteredUsers} />
            <p>   {<TimeAgo date={new Date(JSON.parse(localStorage.getItem("time")))} />}</p>

        </>


    }

}


export default UsersPage;


