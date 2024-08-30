import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '/public/_8075e302-53d1-4e72-90f5-0d79babb7cc4-removebg-preview.png'
import './components.css'

function Header() {
  return (
    <header>
      <img src={logo} />
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/notifications">Notifications</NavLink>
        <NavLink to="/applications">Applications</NavLink>
      </nav>
    </header>
  );
}

export default Header;
