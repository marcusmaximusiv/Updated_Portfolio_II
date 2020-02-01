import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    Home
                  </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/About"
                    className={window.location.pathname === "/About" ? "nav-link active" : "nav-link"}
                >
                    About
                  </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/Portfolio"
                    className={window.location.pathname === "/Portfolio" ? "nav-link active" : "nav-link"}
                >
                    Search
                  </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/Contact"
                    className={window.location.pathname === "/Contact" ? "nav-link active" : "nav-link"}
                >
                    Contact Info
                  </Link>
            </li>
        </ul>
    );
}

export default NavTabs;
