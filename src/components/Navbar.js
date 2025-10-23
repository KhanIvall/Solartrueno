import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarPrincipal() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary fixed-top">
            <Container>
                <Navbar.Brand href="#home"><img src='assets/images/imagotipo.png' style={{width: '60px'}}></img> SolarTrueno</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="#">Inicio</Nav.Link>
                        <Nav.Link href="#">Servicios</Nav.Link>
                        <Nav.Link href="#">Soluciones</Nav.Link>
                        <Nav.Link href="#demo-calculadora">DEMO</Nav.Link>
                        <Nav.Link href="#">Planes</Nav.Link>
                        <Nav.Link href="#">Testimonios</Nav.Link>
                        <Nav.Link href="#">FAQ</Nav.Link>
                        <Nav.Link href="#">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarPrincipal;