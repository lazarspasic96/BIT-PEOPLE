import React from 'react'
import Grid from './Grid';

const UsersCard = (props) => {
    return (
        <div class="col s12 m4">
            <div class="card">
                <div class="card-image">
                    <img src={props.user.image1} />
                    <span class="card-title">{props.user.name}</span>
                    <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                </div>
                <span>{props.user.email}</span> <br />

                <span>{props.user.dob}</span><br /><br />


            </div>
        </div>

    )

}

export default UsersCard; 