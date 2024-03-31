import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="navbar mb-5 fixed-top navbar-expand-lg bg-dark" data-bs-theme="dark">
                <div className="container-fluid row">
                    <div className='col-md-6'>
                        <Link className="navbar-brand" to="/">E-Recipes</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;