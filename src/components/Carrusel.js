import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Carrusel() {

    console.log("Renderizando Carrusel");
    
    return (
        <div id='carrusel'style={{ maxWidth: "1200px", margin: "auto" }}>
            <div className='row mt-3'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/assets/images/fotos/1.png"
                            alt="Equipo 1"
                        />
                        <Carousel.Caption>
                            <h4>Convierte el sol en ahorro. Cada rayo cuenta</h4>
                            <p>Nuestra principal motivación, es nuestro compromiso</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/assets/images/fotos/2.png"
                            alt="Equipo 2"
                        />
                        <Carousel.Caption>
                            <h4>La energía que no se agota. Como tus ganas de vivir sin pagar de más</h4>
                            <p>Contactanos</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/assets/images/fotos/3.png"
                            alt="Equipo 3"
                        />
                        <Carousel.Caption>
                            <h4>Tu techo puede ser más que un techo: puede ser tu planta de energía</h4>
                            <p>
                                www.solartrueno.cl
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>


        </div>
    );

}

export default Carrusel;