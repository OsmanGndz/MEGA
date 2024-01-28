import React from "react";
import "./slide.css"
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary mine">
        <div className="container-fluid mine">
          <a href="/">
            <img
              src="https://www.meram.bel.tr/assets/img/logo.svg"
              alt="Meram Belediyesi"
              style={{
                width: "90px",
                height: "70px",
                marginRight:"80px"
              }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div
              className="navbar-nav"
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                gap: "30px"
              }}
            >
              <NavLink className="nav-link" to="/culture">Meram'da Gezmek</NavLink>
              <NavLink className="nav-link" to="/rest">Meram'da Yemek</NavLink>
              <NavLink className="nav-link" to="/about">Hakkımızda</NavLink>
              <NavLink className="nav-link" to="/contact">İletişim</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
