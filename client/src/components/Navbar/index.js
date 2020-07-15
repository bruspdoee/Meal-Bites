import React from "react";
import { Link } from "react-router-dom";
import { user as userAPI } from "../../utils/API";
// import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = (props) => {
  const signout = () => {
    userAPI
      .signout()
      .then(() => props.setUser({}))
      .catch((e) => {
        throw e;
      });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/signup"
              className={
                window.location.pathname === "/signup"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Sign Up | Log In
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={
                window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          {props.user.id ? (
            <Link
              to="/posting"
              className={
                window.location.pathname === "/posting"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Posting
            </Link>
          ) : (
            <></>
          )}
          <li className="nav-item">
       
            {props.user.id ? (
              <Link
                onClick={signout}
                className={
                  window.location.pathname === "/"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Sign Out
              </Link>
            ) : (
              <></>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
