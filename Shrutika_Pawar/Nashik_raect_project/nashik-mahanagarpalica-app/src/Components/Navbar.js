import React from "react";
import logo from '../Images/logo.png';
class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          <img
              src={logo}
              alt="logo"
              width="50"
              height="50"
              style={{ marginRight: "10px" }}
            />
          <a className="navbar-brand" href="#">
            NMC MUNICIPAL CORPORATION
          </a>
          <button
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="navbar-toggler"
            data-bs-target="#navbarSupportedContent"
            data-bs-toggle="collapse"
            type="button"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0"
              style={{ marginLeft: "300px" }}
            >
              <li className="nav-item">
                <a aria-current="page" className="nav-link active" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  School Activities
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Result
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Committee
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <button className="portal-btn" type="submit">
                Portal Login
              </button>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
