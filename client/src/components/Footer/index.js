import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="main-footer">
      <div class="footer-content">
        <div class="top-footer">
          {
            <div class="fixed-width">
            <div class="footer-info">
                <h2 class="h1">MEALBITES</h2>
                </div>
                <div class="footer-info">
                    <div class="contact-info">
                        <h3 class="contact-title"><span class="border-accent">Need h</span>elp?</h3>
                        <p class="contact-text">help@mealbites.com</p>
                        <p class="contact-text">+1-123-456-7890</p>
                    </div>
                </div>
                <div class="footer-info">
                    <div class="footer-nav">
                        <ul class="footer-nav-list">
                      <li className="footer-nav-item">
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
                      <li className="footer-nav-item">
                          <Link
                            to="/signup"
                            className={
                              window.location.pathname === "/signup"
                                ? "nav-link active"
                                : "nav-link"
                            }
                          >
                            Sign Up / Log In
                          </Link>
                        </li>
                        <li className="footer-nav-item">
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
                        <li className="footer-nav-item">
                          <Link
                            to="/inventory"
                            className={
                              window.location.pathname === "/inventory"
                                ? "nav-link active"
                                : "nav-link"
                            }
                          >
                            Watch the Action
                          </Link>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
          }
          {
            <div class="bottom-footer">
                <div class="social-links">
                    <ul>
                        <li class="social-link"><i class="fab fa-twitter"></i></li>
                        <li class="social-link"><i class="fab fa-instagram"></i></li>
                        <li class="social-link"><i class="fab fa-linkedin-in"></i></li>
                    </ul>
                </div>
                <div class="copyright">
                    <p>© mealbites 2020.</p>
                </div>
            </div>
          }
        </div>
      </div>
    </footer>
  );
}

export default Footer;
