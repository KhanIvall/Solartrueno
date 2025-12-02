import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarPrincipal() {

    console.log("Renderizando NavbarPrincipal");
    
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-dark" sticky='top'>
            <Container>
                <Navbar.Brand href="#carrusel" className="text-warning mt-3">
                    <img src='assets/images/imagotipo.png' alt='logo' style={{ width: '60px', margin: '3px' }} />
                    SolarTrueno
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>

                    <Nav>
                        <Nav.Link href="#carrusel" className="text-warning">Inicio</Nav.Link>
                        <Nav.Link href="#servicios" className="text-warning">Servicios</Nav.Link>
                        <Nav.Link href="#soluciones" className="text-warning">Soluciones</Nav.Link>
                        <Nav.Link href="#demo-calculadora" className="text-warning">DEMO</Nav.Link>
                        <Nav.Link href="#planes" className="text-warning">Planes</Nav.Link>
                        <Nav.Link href="#testimonios" className="text-warning">Testimonios</Nav.Link>
                        <Nav.Link href="#faq" className="text-warning">FAQ</Nav.Link>
                        <Nav.Link href="#contacto" className="text-warning">Contacto</Nav.Link>
                        <Nav.Link href="adminlte/pages/dashboard.js" className="text-warning">AdminLte</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarPrincipal;
