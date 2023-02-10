import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function TopNav() {
  return (
    <Fragment>
      {/*-- Navbar Start --*/}
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-0">
        <a href="index.html" className="navbar-brand d-block d-lg-none">
          <h1 className="m-0 text-uppercase text-white">
            <i className="fa fa-birthday-cake fs-1 text-primary me-3"></i>
            CakeZone
          </h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto mx-lg-auto py-0">
            <NavLink to='/' className="nav-item nav-link active">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-item nav-link">
              About Us
            </NavLink>
            <NavLink to="/products" className="nav-item nav-link">
              Menu & Pricing
            </NavLink>
            <NavLink to="/team" className="nav-item nav-link">
              Master Chefs
            </NavLink>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </a>
              <div className="dropdown-menu m-0">
                <NavLink to="/services" className="dropdown-item">
                  Our Service
                </NavLink>
                <NavLink to="/review" className="dropdown-item">
                  Testimonial
                </NavLink>
              </div>
            </div>
            <NavLink to="/contact" className="nav-item nav-link">
              Contact Us
            </NavLink>
          </div>
        </div>
      </nav>
      {/*-- Navbar End --*/}
    </Fragment>
  );
}
