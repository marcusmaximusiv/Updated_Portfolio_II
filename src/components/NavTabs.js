import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const NavTabs = (props) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div id="nav">
            <Navbar color="faded" light>
                <NavbarBrand href="/" className="mr-auto"><img src="/yingyang-small.png" /></NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                                Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link
                                to="/About"
                                className={window.location.pathname === "/About" ? "nav-link active" : "nav-link"}>
                                About</Link>
                        </NavItem>
                        <NavItem>

                            <Link
                                to="/Portfolio"
                                className={window.location.pathname === "/Portfolio" ? "nav-link active" : "nav-link"}
                            >
                                Portfolio
                  </Link>
                        </NavItem>
                        <NavItem>
                            <Link
                                to="/Contact"
                                className={window.location.pathname === "/Contact" ? "nav-link active" : "nav-link"}
                            >
                                Contact Info
                  </Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar >
        </div>
    );
}


export default NavTabs;
