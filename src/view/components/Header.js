import React from 'react';
import { Link } from "react-router-dom";


const Header = (props) => {

    return (


        <nav>
            <div className="nav-wrapper">
                <a href="#!" className="brand-logo"><Link to='/'>BIT PEOPLE</Link></a>
                <ul className="right hide-on-med-and-down">
                    <li><Link to='/about'>About</Link></li>


                </ul>
            </div>
        </nav >

    )

}

export default Header