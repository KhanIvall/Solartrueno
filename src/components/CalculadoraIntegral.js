import React from 'react';
import Card from 'react-bootstrap/Card';


function Calculadora() {
    return (
        <div id='demo-calculadora'>
            <div className='row mt-5'>
                <div className='col-lg-6'><h3>DEMO calculadora</h3></div>
                <div className='col-lg-6'><p className='text-end'>Maquetado de formulario y resumen.</p></div>
            </div>

            <div className='row'>
                <div className='col-lg-6'>
                    <Card>
                        <Card.Body>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-lg-6'>
                    <Card>
                        <Card.Body>
                        </Card.Body>
                    </Card>
                </div>

            </div>
        </div>
    );
}

export default Calculadora;