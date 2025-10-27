import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarPrincipal() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary fixed-top">
            <Container>
                <Navbar.Brand href="#hero"><img src='assets/images/imagotipo.png' style={{width: '60px'}}></img> SolarTrueno</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="#hero">Inicio</Nav.Link>
                        <Nav.Link href="#servicios">Servicios</Nav.Link>
                        <Nav.Link href="#soluciones">Soluciones</Nav.Link>
                        <Nav.Link href="#demo-calculadora">DEMO</Nav.Link>
                        <Nav.Link href="#planes">Planes</Nav.Link>
                        <Nav.Link href="#testimonios">Testimonios</Nav.Link>
                        <Nav.Link href="#faq">FAQ</Nav.Link>
                        <Nav.Link href="#contacto">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarPrincipal;