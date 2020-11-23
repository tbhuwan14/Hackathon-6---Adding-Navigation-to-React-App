import React from 'react';
import { Link, Switch } from 'react-router-dom';

export default function Nav(){
    return(
        <ul>
            <Link to="/about">
                <li>About</li>
            </Link>
            <Link to="/">
                <li>Home</li>
            </Link>
        </ul>
    )
}