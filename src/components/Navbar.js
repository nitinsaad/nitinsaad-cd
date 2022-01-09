import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg  navbar-dark bg-primary">
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">Home </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/buildings" className="nav-link">Buildings</Link>
                    </li>                    
                    <li className="nav-item">
                    <Link to="/location" className="nav-link">Locations</Link>
                    </li>
                </ul>

            </div>
        </nav>
    )
}

export default Navbar
