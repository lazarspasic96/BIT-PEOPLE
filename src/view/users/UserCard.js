import React from 'react'
import Grid from './Grid';

const UserCard = (props) => {
    const gender = props.user.gender


    return (

        <div className="col s12 m4">
            <div className={`card ${gender}`}>
                <div className="card-image">
                    <img src={props.user.image1} />
                    <span className="card-title">{props.user.name}</span>

                </div>
                <span>{props.user.protectEmail()}</span> <br />

                <span>{props.user.dob}</span><br /><br />


            </div>
        </div >



    )

}






export default UserCard; 