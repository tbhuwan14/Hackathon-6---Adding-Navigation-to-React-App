import React from 'react';
import { Link, Switch } from 'react-router-dom';

export default function Nav(){
    return(
        <div className="nav">
            <h1>NavBar</h1>
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/about">
                    <li>About</li>
                </Link>
            </ul>
        </div>
    )
}