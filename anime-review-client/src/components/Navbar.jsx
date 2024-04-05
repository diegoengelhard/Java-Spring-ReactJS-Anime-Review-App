import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar_title">
                <h1>Anime</h1>
            </Link>
            <div className="navbar_links">
                <Link to="/" className="navbar_link">
                    Home
                </Link>
                <Link to="/create" className="navbar_link">
                    Create Review
                </Link>
            </div>
        </nav>
    )
}

export default Navbar