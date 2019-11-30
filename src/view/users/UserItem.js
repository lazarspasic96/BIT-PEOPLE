import React from 'react';

const UserItem = (props) => {

    const gender = props.user.gender

    return (
        <>
            <ul className="collection">
                <li className={`collection-item avatar ${gender}`}>
                    <img src={props.user.image} alt="" className="circle" />
                    <span className="title">{props.user.name}</span>

                    <p><i className="tiny material-icons">email</i>{(props.user.protectEmail())}<br />
                        <i className="tiny material-icons">cake</i>{props.user.dob}</p>

                </li>
            </ul >
        </>

    )

}

export default UserItem;