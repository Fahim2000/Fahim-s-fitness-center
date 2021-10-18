import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Navbar.css";
const NavBar = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            <span className="ms-2  text-warning custom-style">
              Fahim's fitness center
            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-1 mb-lg-0 align-items-center">
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/faq" className="nav-link">
                  FAQ
                </Link>
              </li>
              {/* CONDIOTIONAL RENDERING BASEN ON THE AUNTHENTICATION STATUS OF USER */}
              {user.email ? (
                <>
                  {" "}
                  {user.displayName ? (
                    <span className="me-2 text-white">{user.displayName}</span>
                  ) : (
                    <span className="me-2 text-white">Your account</span>
                  )}
                  <button className="btn btn-danger" onClick={logOut}>
                    {" "}
                    Logout
                  </button>
                </>
              ) : (
                <>
                  {" "}
                  <li className="nav-item">
                    <Link to="/login" className="nav-link">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/register" className="nav-link">
                      Sign Up
                    </Link>
                  </li>{" "}
                </>
              )}
              )
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
