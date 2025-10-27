import React from 'react';
import Button from 'react-bootstrap/Button';

function Hero() {
    return (
        <div id='hero'>
            <div className='row mt-3'>
                <div className='col-md-6'>
                    <h1 className='mt-5'>Energía solar accesible y confiable para tu hogar o pyme</h1>
                    <p className='lead'>Dimensiona tu sistema, conoce el costo estimado y solicita asesoría en minutos. La DEMO te guía con valores referenciales.</p>
                    <Button variant="success" href='#demo-calculadora'>Ver DEMO</Button>
                    <Button variant="outline-dark" className='m-3' href='/DnD_5E_CharacterSheet_FormFillable.pdf' download={'Catalogo'}>Descargar Catálogo</Button>
                </div>

                <div className='col-md-6'>
                    <img src='/assets/images/hero-image.png' alt='Hero' className='img-fluid' style={{width: '100%'}}/>
                </div>
            </div>
        </div>
    );
}

export default Hero;