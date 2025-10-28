import React from 'react';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

function Carrusel() {
    return (
        <div id='carrusel'>
            <div className='row mt-3'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/assets/images/fotos/equipo-1.jpg"
                            alt="Equipo 1"
                        />
                        <Carousel.Caption>
                            <h3>Equipo Trabajando</h3>
                            <p>Nuestra principal motivación, es nuestro compromiso</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/assets/images/fotos/equipo-2.png"
                            alt="Equipo 2"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/assets/images/fotos/equipo-3.png"
                            alt="Equipo 3"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>


        </div>
    );

}

export default Carrusel;