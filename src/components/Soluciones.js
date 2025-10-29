import React from 'react';
import Card from 'react-bootstrap/Card';

function Soluciones() {
    return (
        <div id='soluciones'>
            <div className='row mt-5'>
                <div className='col-lg-6'><h3>Soluciones</h3></div>
                <div className='col-lg-6'><p className='text-end text-muted'>Kits residenciales, PyME, off-grid con baterías e hibridos.</p></div>
                
                <div className='col-lg-4 mt-3'>
                    <Card className="text-center py-3">
                        <div className="d-flex justify-content-center">
                            <Card.Img 
                                variant="top" 
                                src="assets/images/icons/1.png" 
                                style={{ width: '35%' }}
                            />
                        </div>
                        <Card.Body>
                            <Card.Title>Hogar 3-5 Kw</Card.Title>
                            <Card.Text className='text-muted'>
                                Balance ideal entre costo y ahorro mensual.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-lg-4 mt-3'>
                    <Card className="text-center py-3">
                        <div className="d-flex justify-content-center">
                            <Card.Img 
                                variant="top" 
                                src="assets/images/icons/2.png" 
                                style={{ width: '35%' }}
                            />
                        </div>
                        <Card.Body>
                            <Card.Title>PyME 10-20 Kw</Card.Title>
                            <Card.Text className='text-muted'>
                                Para operacion diurna con buena irradiación.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-lg-4 mt-3'>
                    <Card className="text-center py-3">
                        <div className="d-flex justify-content-center">
                            <Card.Img 
                                variant="top" 
                                src="assets/images/icons/3.png" 
                                style={{ width: '35%' }}
                            />
                        </div>
                        <Card.Body>
                            <Card.Title>Off-grid con baterías</Card.Title>
                            <Card.Text className='text-muted'>
                                Autonomía en zonas sin red electrica.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

            </div>
        </div>
    );
}

export default Soluciones;
