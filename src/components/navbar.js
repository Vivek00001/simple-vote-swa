import React from 'react';
import {  Link } from "react-router-dom";


const NavBar=() =>{
  return (
    <nav className = "nav-wrapper" >
        <div>
        <ul >
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/login">Login</Link>
        </li>
        <li>
        <Link to="/logout">Logout</Link>
        </li>
        </ul>
        </div>
    </nav>
  );
}
export default NavBar;