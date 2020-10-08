import React, { useContext } from "react";
import SessionContext from "./SessionContext";
// import "./NavBar.css";
import { 
    Navbar, 
    Nav, 
    NavItem, 
    NavbarBrand, 
    NavbarToggler,
    NavLink,
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
        <Collapse>
            <Nav>
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
            <UncontrolledDropdown nav inNavbar className="mr-auto">
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
        <Collapse>
            <Nav>
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
            <Navbar expand="md">
                <NavbarBrand href="/">Job.ly</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                {loggedIn ? navLoggedIn : navLoggedOut};
            </Navbar>
        </div>
    )
}

export default JoblyNavBar;