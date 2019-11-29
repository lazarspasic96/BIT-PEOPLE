import React from 'react';
import { Route } from 'react-router-dom'
import UsersPage from './users/UsersPage';
import About from './users/About'


class Main extends React.Component {
    render() {
        return (
            <main>
                <Route exact path="/" component={() => <UsersPage isGrid={this.props.isGrid} />} />
                <Route exact path="/about" component={About} />
            </main>
        )

    }
}



export default Main;