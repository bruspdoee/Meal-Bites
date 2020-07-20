import React from "react";
import { Link } from "react-router-dom";
import { user as userAPI } from "../../utils/API";
// import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item

const Header = (props) => {
    console.group("header");
    console.info(`🌎 page rendered at path: '${props.match.path}'`, "\n");
    console.info("🤖 user", props.user);
    console.groupEnd();

    return (
        <nav className="nav">
            {
                <div className="main-nav hide">
                    <div className="main-nav-content fixed-width">
                        <h1 className="h1">MEALBITES</h1>
                        <button className="nav-toggle">
                          <i className="fas fa-bars"></i>
                        </button>
                    </div>
                </div>
            }
        </nav>
    );
};

export default Header;