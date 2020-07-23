import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/nav.css';

const Nav = () => {
    return (
        <nav className="nav">
            <h3>Video App</h3>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/addVideo">Add video</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;