import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <div className="header">
        <nav className="navbar navbar-expand-lg   text-light  py-1  px-5 fs-4 ">
          <div className="container-fluid  text-white">
            <Link
              className=" navbar-expand  text-light  display-5 text-decoration-none pb-2"
              to="/"
            >
              Textcnvrt
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
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse 
              "
              id="navbarSupportedContent ml-4 "
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0   ml-4">
                <li className="nav-item">
                  <Link
                    className="nav-link active text-white px-4"
                    aria-current="page"
                    to="/"
                  >
                    HOME
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white px-4" to="/about">
                    ABOUT ME
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-white px-" to="/contact">
                    CONTACT US
                  </Link>
                </li>
              </ul>

              <div className="form-check form-switch">
                <img
                  src={props.imagesrc} //
                  alt="/"
                  onClick={props.mode} //
                />

                {/* <input
                  className="form-check-input"
                  // onClick={props.mode} //props lgaya k kyu ki app.js mai use ek liye
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                /> */}
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Enable {props.imagesrc === "day.png" ? "dark" : "light"} Mode
                </label>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
