import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"


const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="logo">
                <a href="#">Logo Name</a>
            </div>
        
            <ul>
                <li>
                    <Link to="/"> Show Post</Link>
                </li>
                <li>
                    <Link to="addPost"> Add Post</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
