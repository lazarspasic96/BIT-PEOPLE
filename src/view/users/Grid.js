import React from 'react'
/* import UsersPage from './UsersPage'; */
import UserCard from './UserCard'

const Grid = (props) => {

    return (

        <>
            <div className='row'>
                {props.users.map(userFromArr => <UserCard key={userFromArr.id} user={userFromArr} />)}

            </div>


        </>


    )

}


export default Grid;