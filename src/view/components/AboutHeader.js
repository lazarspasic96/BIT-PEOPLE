import React from 'react';
import { Link } from "react-router-dom";


const AboutHeader = (props) => {

    return (

        <nav>
            <div className="nav-wrapper">
                {/* <a href="#!" className="brand-logo"> */}<Link className="brand-logo" to='/'>BIT PEOPLE</Link>{/* </a> */}
            </div>
        </nav >

    )

}

export default AboutHeader