import React from 'react';
import UserItem from './UserItem';

const UsersList = (props) => {
    return (
        <>
            {props.users.map(userFromArr => <UserItem user={userFromArr} />)}

        </>

    )

}

export default UsersList; 