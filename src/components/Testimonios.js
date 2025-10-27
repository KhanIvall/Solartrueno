import React from 'react';
import Card from 'react-bootstrap/Card';

function Testimonios() {
    return (
        <div id='testimonios'>
            <div className='row mt-5'>
                <div className='col-lg-6'><h3>Testimonios</h3></div>
                <div className='col-lg-6'><p className='text-end text-muted'>Clientes que ya confian en SolarTrueno.</p></div>
            </div>

            <div className='row mt-3 mb-5'>
                <div className='col-lg-4'>
                    <Card style={{ width: '23rem' }} className='p-3'>
                        <div className='row'>
                            <div className='col-lg-2'>
                                <Card.Img variant="top" src="https://randomuser.me/api/portraits/women/44.jpg" className='rounded-circle' style={{ width: '60px' }}/>
                            </div>
                            <div className='col-lg-10'>
                                <Card.Body>
                                    <Card.Title>Alejandra, Ñuñoa</Card.Title>
                                    <Card.Text className='text-muted'>
                                        "Instalación rápida y ahorro visible en la primera boleta."
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </div>
                    </Card>
                </div>

                <div className='col-lg-4'>
                    <Card style={{ width: '23rem' }} className='p-3'>
                        <div className='row'>
                            <div className='col-lg-2'>
                                <Card.Img variant="top" src="https://randomuser.me/api/portraits/men/44.jpg" className='rounded-circle' style={{ width: '60px' }}/>
                            </div>
                            <div className='col-lg-10'>
                                <Card.Body>
                                    <Card.Title>Diego, Valdivia</Card.Title>
                                    <Card.Text className='text-muted'>
                                        "El monitoreo me permite proyectar bien los consumos."
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </div>
                    </Card>
                </div>

                <div className='col-lg-4'>
                    <Card style={{ width: '23rem' }} className='p-3'>
                        <div className='row'>
                            <div className='col-lg-2'>
                                <Card.Img variant="top" src="https://randomuser.me/api/portraits/women/4.jpg" className='rounded-circle' style={{ width: '60px' }}/>
                            </div>
                            <div className='col-lg-10'>
                                <Card.Body>
                                    <Card.Title>Carla, Copiapó</Card.Title>
                                    <Card.Text className='text-muted'>
                                        "Excelente asesoría y postventa. 100% recomendado."
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Testimonios;