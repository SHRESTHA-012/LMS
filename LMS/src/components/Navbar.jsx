import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar({ isAuthenticated, onLogout }) {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand fw-bold" to="/Dashboard">LibraryManagement</NavLink>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/Books">Books</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Student">Students</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Librarian">Librarians</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Newspapers">Newspapers</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Magazines">Magazines</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/AboutUs">About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/ContactUs">Contact Us</NavLink>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto">
              {!isAuthenticated ? (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Login">Login</NavLink>
                </li>
              ) : (
                <li className="nav-item">
                  <button 
                    className="nav-link btn btn-link" 
                    onClick={onLogout}
                    style={{ textDecoration: 'none', border: 'none', background: 'none' }}
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
