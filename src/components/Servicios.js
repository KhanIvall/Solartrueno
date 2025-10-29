import React from 'react';
import Card from 'react-bootstrap/Card';

function Servicios() {

    console.log("Renderizando Servicios");
    
    return (
        <div id='servicios'>
            <div className='row mt-5'>
                <div className='col-lg-6'><h3>Servicios</h3></div>
                <div className='col-lg-6'><p className='text-end text-muted'>Estudio energético, instalación certificada, monitoreo y mantención.</p></div>
                
                <div className='col-lg-3'>
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src="assets/images/fotos/estudio.png" style={{ width: '100%' }} className='p-2'/>
                        <Card.Body>
                            <Card.Title>Estudio Energético</Card.Title>
                            <Card.Text className='text-muted'>
                                Análisis de consumo y propuesta ajustada a tu perfil.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-lg-3'>
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src="assets/images/fotos/certificada.png" style={{ width: '100%' }} className='p-2'/>
                        <Card.Body>
                            <Card.Title>Instalación Certificada</Card.Title>
                            <Card.Text className='text-muted'>
                                Ejecutada por personal autorizado y normativa vigente.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-lg-3'>
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src="assets/images/fotos/Monitoreo.png" style={{ width: '100%' }} className='p-2'/>
                        <Card.Body>
                            <Card.Title>Monitoreo</Card.Title>
                            <Card.Text className='text-muted'>
                                Seguimiento de rendimiento y alertas preventivas.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-lg-3'>
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src="assets/images/fotos/mantencion.png" style={{ width: '100%' }} className='p-2'/>
                        <Card.Body>
                            <Card.Title>Mantención</Card.Title>
                            <Card.Text className='text-muted'>
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