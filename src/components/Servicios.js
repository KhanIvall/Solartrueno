import React from 'react';
import Card from 'react-bootstrap/Card';

function Servicios() {
    return (
        <div id='servicios'>
            <div className='row mt-5'>
                <div className='col-lg-6'><h3>Servicios</h3></div>
                <div className='col-lg-6'><p className='text-end'>Estudio energético, instalación certificada, monitoreo y mantención.</p></div>
                
                <div className='col-lg-3'>
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src="assets/images/icons/estudio-energetico-icon.png" style={{ width: '20%' }} className='p-2'/>
                        <Card.Body>
                            <Card.Title>Estudio Energético</Card.Title>
                            <Card.Text>
                                Análisis de consumo y propuesta ajustada a tu perfil.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-lg-3'>
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src="assets/images/icons/instalacion-certificada-icon.png" style={{ width: '20%' }} className='p-2'/>
                        <Card.Body>
                            <Card.Title>Instalación Certificada</Card.Title>
                            <Card.Text>
                                Ejecutada por personal autorizado y normativa vigente.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-lg-3'>
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src="assets/images/icons/monitoreo-icon.png" style={{ width: '20%' }} className='p-2'/>
                        <Card.Body>
                            <Card.Title>Monitoreo</Card.Title>
                            <Card.Text>
                                Seguimiento de rendimiento y alertas preventivas.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-lg-3'>
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src="assets/images/icons/mantencion-icon.png" style={{ width: '20%' }} className='p-2'/>
                        <Card.Body>
                            <Card.Title>Mantención</Card.Title>
                            <Card.Text>
                                Planes periodicos para extender la vida útil del sistema.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

            </div>
        </div>
    );
}

export default Servicios;