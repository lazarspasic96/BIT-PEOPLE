import React from 'react';
import UserItem from './UserItem';

const UsersList = (props) => {
    return (

        <div >
            {props.users.map(userFromArr => <UserItem key={userFromArr.id} user={userFromArr} />)}

        </div>

    )

}

export default UsersList; 