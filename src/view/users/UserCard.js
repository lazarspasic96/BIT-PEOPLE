import React from 'react'
import Grid from './Grid';

const UserCard = (props) => {
    return (
        <div className="col s12 m4">
            <div className="card">
                <div className="card-image">
                    <img src={props.user.image1} />
                    <span className="card-title">{props.user.name}</span>
                    {/*  <a className="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons"></i></a> */}
                </div>
                <span>{props.user.protectEmail()}</span> <br />

                <span>{props.user.dob}</span><br /><br />


            </div>
        </div>

    )

}

export default UserCard; 