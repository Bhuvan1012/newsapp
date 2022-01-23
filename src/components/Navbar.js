import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // constructor(props) {
  //   super(props);
  // }

  return (
    <nav
      className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark"
      // className={`navbar sticky-top navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {/* <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyfAUuupE7eV0Gt6qQPMavy_dQR_O2Xim6oA&usqp=CAU"
              alt=""
              width="30"
              height="24"
            />{" "} */}
          NewsMonkey
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/business">
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/entertainment">
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/general">
                General
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/health">
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/science">
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sports">
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/technology">
                Technology
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="mode"
                  onClick={this.props.handleMode}
                />
                <label className="form-check-label" htmlFor="mode">
                  Enable {this.props.mode === "light" ? "Dark" : "Light"} Mode
                </label>
              </div>
            </form> */}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
