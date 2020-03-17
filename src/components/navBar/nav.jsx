import React from 'react';
import { Link } from "react-router-dom";

import './nav.css';

function Nav(props){
    return (<ul className="nav">
            {props.routes && props.routes.map((route) => (
                route.path &&
                    <li key={route.path}>
                        <Link to={route.path}>{route.name}</Link>
                    </li>)
            )}
        </ul>
    )
}

export default Nav;