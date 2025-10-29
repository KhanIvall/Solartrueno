import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Planes() {
    return (
        <div id='planes'>
            <div className='row mt-5'>
                <div className='col-lg-6'><h3>Planes</h3></div>
                <div className='col-lg-6'><p className='text-end text-muted'>Elige el plan que se ajusta a tu proyecto.</p></div>
            </div>

            <div className='row mt-3 mb-5 row-cols-1 row-cols-md-3 g-4'>
                <div className='col-lg-4 text-center'>
                    <Card style={{ width: '23rem' }}>
                        <Stack direction="horizontal" className="justify-content-center mt-3">
                            <Badge pill bg="warning" className="justify-content-center mt-3 text-dark">Básico</Badge>
                        </Stack>
                        <Card.Body>
                            <Card.Title>3-5 kW</Card.Title>
                            <Card.Text className='text-muted'>
                                Estudio energético
                            </Card.Text>
                            <Card.Text className='text-muted'>
                                Instalación estandar
                            </Card.Text>
                            <Card.Text className='text-muted'>
                                Monitoreo básico
                            </Card.Text>
                            <Button variant="warning">Solicitar evaluación</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-lg-4 text-center'>
                    <Card style={{ width: '23rem' }}>
                        <Stack direction="horizontal" className="justify-content-center mt-3">
                            <Badge pill bg="warning" className="justify-content-center mt-3 text-dark">Optimizado</Badge>
                        </Stack>
                        <Card.Body>
                            <Card.Title>10-15 kW</Card.Title>
                            <Card.Text className='text-muted'>
                                Estudio avanzado
                            </Card.Text>
                            <Card.Text className='text-muted'>
                                Instalación optimizada
                            </Card.Text>
                            <Card.Text className='text-muted'>
                                Monitoreo avanzado
                            </Card.Text>
                            <Button variant="warning">Solicitar evaluación</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-lg-4 text-center'>
                    <Card style={{ width: '23rem' }}>
                        <Stack direction="horizontal" className="justify-content-center mt-3">
                            <Badge pill bg="warning" className="justify-content-center mt-3 text-dark">Autónomo</Badge>
                        </Stack>
                        <Card.Body>
                            <Card.Title>Híbrido + baterías</Card.Title>
                            <Card.Text className='text-muted'>
                                Diseño off-grid
                            </Card.Text>
                            <Card.Text className='text-muted'>
                                Almacenamiento
                            </Card.Text>
                            <Card.Text className='text-muted'>
                                Soporte preferente
                            </Card.Text>
                            <Button variant="warning">Solicitar evaluación</Button>
                        </Card.Body>
                    </Card>
                </div>

            </div>
        </div>
    );
}

export default Planes;