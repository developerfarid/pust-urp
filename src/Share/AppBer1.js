import React from 'react';
import { Container, Nav, Navbar ,NavLink} from 'react-bootstrap';
import { Link } from "react-router-dom";

const AppBer1 = () => {
    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand className="fw-bold fs-3 logo" to="home">PUST URP</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className="my-nav" to="home">Home</Link>
                            <Link className="my-nav" to="about">About</Link>
                            <Link className="my-nav" to="higherStudy">Higher Study</Link>
                           
                            <Link className="my-nav" to="bcs">BCS</Link>
                            <Link className="my-nav" to="contact">Contact 
                            Us</Link>
                            <Link className="my-nav" to="login">Login</Link>
                            <Link className="my-nav" to="logout">Logout</Link>
                            <Link className="my-nav" to="admin">Admin</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default AppBer1;
