import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Navbar, Nav, NavbarBrand, NavDropdown, Form, Button, FormControl} from 'react-bootstrap';
import './Navigation.css';
import logo from '../images/logo_transparent.svg';

class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" variant="light"  expand="lg">
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            width="auto"
                            height="80px"
                            className="d-inline-block align-top"
                            alt="EduCamp logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
                        <Nav className="justify-content-end text-large" activeKey="/home">
                            <Nav.Item>
                                <Link to={"/homeworks"}>Homeworks</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to={"/announcements"}>Announcements</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to={"/contact"}>Contact</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to={"/login"}>Login</Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;