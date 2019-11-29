import React from 'react';
import UserItem from './UserItem';

const UsersList = (props) => {
    return (
        <div>
            {props.users.map(userFromArr => <UserItem user={userFromArr} />)}

        </div>

    )

}

export default UsersList; 