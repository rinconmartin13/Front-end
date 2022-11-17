import React from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import '../Styles/Navbar.css';

const NavbarPag = () => {
    return (
      <>
        <Navbar className="navBg" expand="lg">
        <Container>
            <Navbar.Brand className='text' as={Link} to="/" >Best Work</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link className='text' as={Link} to="/" >Home</Nav.Link>
                <Nav.Link className='text' as={Link} to="/Graf">Statistics</Nav.Link>
                <Nav.Link className='text' as={Link} to="/About">About Us</Nav.Link>                
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>  

        <section>
            <Outlet></Outlet>
        </section> 
      </>
    );
}

export default NavbarPag;