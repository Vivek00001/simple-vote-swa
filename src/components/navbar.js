import React from 'react';
import {  Link } from "react-router-dom";
import Home from '../pages/home';

const NavBar=() =>{
  return (
    <nav className = "nav-wrapper" >
        <div>
        <ul >
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/.auth/login">Login</Link>
        </li>
        <li>
        <Link to="/.auth/logout">Logout</Link>
        </li>
        </ul>
        </div>
    </nav>
  );
}
export default NavBar;