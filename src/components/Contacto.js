import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

function Contacto() {
    return (
        <div id='contacto'>
            <div className='row mt-5'>
                <div className='col-lg-6'><h3>Contacto</h3></div>
                <div className='col-lg-6'><p className='text-end text-muted'>Cuentanos tu proyecto y agenda una asesoría</p></div>
            </div>

            <div className='row mt-3'>
                <div className='col-lg-12'>
                    <Card>
                        <Card.Body>
                            <Form>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <Form.Group className="mb-3" controlId="formName">
                                            <Form.Label>Nombre</Form.Label>
                                            <Form.Control type="text" placeholder="Tu nombre" />
                                        </Form.Group>
                                    </div>
                                    <div className='col-lg-6'>
                                        <Form.Group className="mb-3" controlId="formEmail">
                                            <Form.Label>Correo electrónico</Form.Label>
                                            <Form.Control type="email" placeholder="tucorreo@dominio.com" />
                                        </Form.Group>
                                    </div>
                                </div>

                                <Form.Group className="mb-3" controlId="formMessage">
                                    <Form.Label>Mensaje</Form.Label>
                                    <Form.Control as="textarea" rows={5} placeholder="Describe brevemente tu necesidad" />
                                </Form.Group>

                                <Button variant="warning" type="submit">
                                    Enviar
                                </Button>
                                <Button variant="outline-dark" type="clear" className="m-2">
                                    Limpiar
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>

                </div>
            </div>
        </div>
    );
}

export default Contacto;