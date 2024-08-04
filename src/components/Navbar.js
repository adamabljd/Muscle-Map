import React from 'react';
import logo from '../assets/images/logo_nobg.png';
import '../assets/style/navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/"><img src={logo} alt="Muscle Map" className="d-inline-block align-text-top" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <button className="btn dropdown-toggle text-light border-0 fw-bold" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item text-light" href="/">Action</a></li>
                <li><a className="dropdown-item text-light" href="/">Another action</a></li>
                <li><a className="dropdown-item text-light" href="/">Something else here</a></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex me-3">
            <div className="input-group">
              <span className="input-group-text search-btn border-0 bg-secondary-subtle">
                <i className="fas fa-search text-dark"></i>
              </span>
              <input className="form-control" type="search" placeholder="Search..." aria-label="Search" />
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
