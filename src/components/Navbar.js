import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => (
  <div className="navbar">
    <h1 className="logo">Bookstore CMS</h1>
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><Link className="link-nav" to="/">Books</Link></li>
        <li className="nav-item"><Link className="link-nav" to="/categories">Categories</Link></li>
      </ul>
    </nav>
  </div>
);

export default Navbar;
