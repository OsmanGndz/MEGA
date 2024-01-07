import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar({ user, handleLogOut }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container">
        <Link className="navbar-brand fs-2" to="/">DayStore</Link>
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
          <ul className="navbar-nav">
            
            <NavLink className="nav-link fs-5" to="/products">Ürünler</NavLink>
            <NavLink className="nav-link fs-5" to="/about">Hakkımızda</NavLink>
            <NavLink className="nav-link fs-5" to="/contact">İletişim</NavLink>
          </ul>
          <ul className="navbar-nav ms-auto">
            {user ? (
              <>
                <NavLink className="nav-link fs-5" to="/fav">Sepet</NavLink>
                <button className="nav-link fs-5" onClick={handleLogOut}>Logout ({user.name})</button>
              </>
            ) : (
              <NavLink className="nav-link fs-5" to="/login">Login</NavLink>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
