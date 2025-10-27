import React from 'react';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

function Calculadora() {
    return (
        <div id='demo-calculadora'>
            <div className='row mt-5'>
                <div className='col-lg-6'><h3>DEMO calculadora</h3></div>
                <div className='col-lg-6'><p className='text-end text-muted'>Maquetado de formulario y resumen.</p></div>
            </div>

            <div className='row'>
                <div className='col-lg-6'>
                    <Card className='p-3'>
                        <Card.Body>
                            <h5>Formulario</h5>
                            {/* Potencia y cantidad */}
                            <div className='row mt-4'>
                                <div className='col-lg-6'>
                                    
                                </div>
                                <div className='col-lg-6'></div>
                            </div>

                            {/* Inversor y batería */}
                            <div className='row mt-4'>
                                <div className='col-lg-6'></div>
                                <div className='col-lg-6'></div>
                            </div>

                            {/* Cantidad y estructura */}
                            <div className='row mt-4'>
                                <div className='col-lg-6'></div>
                                <div className='col-lg-6'></div>
                            </div>

                            {/* Instalación y peso */}
                            <div className='row mt-4'>
                                <div className='col-lg-6'></div>
                                <div className='col-lg-6'></div>
                            </div>

                            {/* Tipo techo y región */}
                            <div className='row mt-4'>
                                <div className='col-lg-6'></div>
                                <div className='col-lg-6'></div>
                            </div>

                            {/* Complejidad y subsidio */}
                            <div className='row mt-4'>
                                <div className='col-lg-6'></div>
                                <div className='col-lg-6'></div>
                            </div>

                            {/* Envío y garantía */}
                            <div className='row mt-4'>
                                <div className='col-lg-6'></div>
                                <div className='col-lg-6'></div>
                            </div>

                            {/* Plan y pie */}
                            <div className='row mt-4'>
                                <div className='col-lg-6'></div>
                                <div className='col-lg-6'></div>
                            </div>

                            {/* Valor de pie */}
                            <div className='row mt-4'>
                                <div className='col-lg-6'></div>
                                <div className='col-lg-6'></div>
                            </div>

                            <Button variant='outline-dark'>Reiniciar</Button>
                            <Button variant='outline-dark' className='m-3'>Copiar resumen</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-lg-6'>
                    <Card className='p-3'>
                        <Card.Body>
                            <h5>Resumen</h5>
                            <Table striped bordered hover>
                                <tbody>
                                    <tr>
                                        <td>a</td>
                                        <td>b</td>
                                    </tr>
                                    <tr>
                                        <td>a</td>
                                        <td>b</td>
                                    </tr>
                                    <tr>
                                        <td>a</td>
                                        <td>b</td>
                                    </tr>
                                    <tr>
                                        <td>a</td>
                                        <td>b</td>
                                    </tr>
                                    <tr>
                                        <td>a</td>
                                        <td>b</td>
                                    </tr>
                                    <tr>
                                        <td>a</td>
                                        <td>b</td>
                                    </tr>
                                    <tr>
                                        <td>a</td>
                                        <td>b</td>
                                    </tr>
                                    <tr>
                                        <td>a</td>
                                        <td>b</td>
                                    </tr>
                                    <tr>
                                        <td>a</td>
                                        <td>b</td>
                                    </tr>
                                    <tr>
                                        <td>a</td>
                                        <td>b</td>
                                    </tr>
                                    <tr>
                                        <td>a</td>
                                        <td>b</td>
                                    </tr>
                                    <tr>
                                        <td>a</td>
                                        <td>b</td>
                                    </tr>
                                    <tr>
                                        <td>a</td>
                                        <td>b</td>
                                    </tr>
                                </tbody>
                            </Table>

                            <Badge pill bg='warning'>Valores referenciales para el prototipo</Badge>
                        </Card.Body>
                    </Card>
                </div>

            </div>
        </div>
    );
}

export default Calculadora;