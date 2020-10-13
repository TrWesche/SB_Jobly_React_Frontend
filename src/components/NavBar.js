import React, { useContext, useState } from "react";
import {AuthContext} from "./AuthContext";
import {NavLink, Link} from "react-router-dom";
import "./NavBar.css";
import { 
    Navbar, 
    Nav, 
    NavItem, 
    NavbarToggler,
    Collapse,
    UncontrolledDropdown, 
    DropdownToggle, 
    DropdownMenu, 
    DropdownItem
 } from "reactstrap";
import ModalContainer from "./ModalContainer";
import UserLoginForm from "./user/UserLoginForm";
import NewUserFrom from "./user/NewUserForm";

function JoblyNavBar( {currentUser} ) {
    const {authToken, clearAuthToken} = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const navLoggedIn = (
        <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
                <NavItem>
                    <NavLink className="navbar-link" to="/users">Users</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="navbar-link" to="/companies">Companies</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="navbar-link" to="/jobs">Jobs</NavLink>
                </NavItem>
            </Nav>
            <UncontrolledDropdown >
                <DropdownToggle nav caret>
                    My Account
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem>
                        <NavLink to={currentUser ? `/users/${currentUser.username}` : "/"}>Profile</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                        <NavLink to={currentUser ? `/users/${currentUser.username}/edit` : "/"}>Settings</NavLink>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={clearAuthToken}>
                        Logout
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </Collapse>
    )

    const navLoggedOut = (
        <Collapse isOpen={isOpen} navbar className="navbar-logout">
            <Nav navbar >
                <NavItem>
                    <ModalContainer buttonLabel="Login" className="LoginForm" headerText="Login" BodyRender={UserLoginForm} />
                </NavItem>
                <NavItem>
                    <ModalContainer buttonLabel="Register" className="RegisterForm" headerText="Sign Up" BodyRender={NewUserFrom} />
                </NavItem>
            </Nav>
        </Collapse>
    )

    return (
        <div>
            <Navbar dark expand="md">
                <Link to="/" className="mr-auto navbar-brand">Job.ly</Link>
                <NavbarToggler onClick={toggle} className="mr-2"/>
                {authToken ? navLoggedIn : navLoggedOut}
            </Navbar>
        </div>
    )
}

export default JoblyNavBar;