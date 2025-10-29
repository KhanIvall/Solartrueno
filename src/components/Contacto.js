import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

function Contacto() {

    const [validado, setValidado] = useState(false);

    const manejarEnvio = (e) => {
        const formulario = e.currentTarget;
        if (!formulario.checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
        }
        setValidado(true);
    };

    return (
        <div id='contacto'>
            <div className='row mt-5'>
                <div className='col-lg-6'><h3>Contacto</h3></div>
                <div className='col-lg-6'><p className='text-end text-muted'>Cuéntanos tu proyecto y agenda una asesoría</p></div>
            </div>

            <div className='row mt-3'>
                <div className='col-lg-12'>
                    <Card>
                        <Card.Body>
                            <Form noValidate validated={validado} onSubmit={manejarEnvio}>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <Form.Group className="mb-3" controlId="formNombre">
                                            <Form.Label>Nombre</Form.Label>
                                            <Form.Control type="text" placeholder="Tu nombre" required />
                                            <Form.Control.Feedback type="invalid">
                                                Este campo es obligatorio.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </div>

                                    <div className='col-lg-6'>
                                        <Form.Group className="mb-3" controlId="formCorreo">
                                            <Form.Label>Correo electrónico</Form.Label>
                                            <Form.Control type="email" placeholder="tucorreo@dominio.com" required />
                                            <Form.Control.Feedback type="invalid">
                                                Ingresa un correo válido.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </div>
                                </div>

                                <Form.Group className="mb-3" controlId="formMensaje">
                                    <Form.Label>Mensaje</Form.Label>
                                    <Form.Control as="textarea" rows={5} placeholder="Describe brevemente tu necesidad" required />
                                    <Form.Control.Feedback type="invalid">
                                        Cuéntanos sobre tu proyecto y como quieres realizarlo.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Button variant="warning" type="submit">
                                    Enviar
                                </Button>
                                <Button variant="outline-dark" type="reset" className="m-2">
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
