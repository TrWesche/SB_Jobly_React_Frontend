import React, { useContext, useState } from "react";
import SessionContext from "./SessionContext";
import {NavLink} from "react-router-dom";
import "./NavBar.css";
import { 
    Navbar, 
    Nav, 
    NavItem, 
    NavbarBrand, 
    NavbarToggler,
    Collapse,
    UncontrolledDropdown, 
    DropdownToggle, 
    DropdownMenu, 
    DropdownItem
 } from "reactstrap";

function JoblyNavBar() {
    const {loggedIn, username} = useContext(SessionContext);

    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => setIsOpen(!isOpen);


    const navLoggedIn = (
        <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
                <NavItem>
                    <NavLink to="/users">Users</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/companies">Companies</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/jobs">Jobs</NavLink>
                </NavItem>
            </Nav>
            <UncontrolledDropdown >
                <DropdownToggle nav caret>
                    My Account
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem>
                        <NavLink to={`/users/${username}`}>Profile</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                        <NavLink to={`/users/${username}/edit`}>Settings</NavLink>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                        <NavLink to="/logout">Logout</NavLink>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </Collapse>
    )

    const navLoggedOut = (
        <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto">
                <NavItem>
                    <NavLink to="/login">Login</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/register">Register</NavLink>
                </NavItem>
            </Nav>
        </Collapse>
    )

    return (
        <div>
            <Navbar dark expand="md">
                <NavbarBrand href="/" className="mr-auto">Job.ly</NavbarBrand>
                <NavbarToggler onClick={toggle} className="mr-2"/>
                {loggedIn ? navLoggedIn : navLoggedOut}
            </Navbar>
        </div>
    )
}

export default JoblyNavBar;