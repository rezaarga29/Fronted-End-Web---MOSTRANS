import React from "react";
import { Link } from "react-router-dom";
import "../Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container-fluid">
        <Link to="/user" className="navbar-brand">
          MOSTRANS
        </Link>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                List Character
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/location" className="nav-link">
                Character By Location
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
