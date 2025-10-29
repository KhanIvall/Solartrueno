import React from 'react';
import Button from 'react-bootstrap/Button';

function Hero() {

    console.log("Renderizando Hero");
    
    return (
        <section id="hero" className="container py-5">
            <div className="row align-items-center">

                {/* Columna texto */}
                <div className="col-md-6 text-center text-md-start">
                    <img
                        src="/assets/images/imagen-hero-2.png"
                        alt="SolarTrueno"
                        style={{ width: '100%' }}
                        className="mb-4"
                    />

                    <h3 className="fw-bold mb-3">
                        Energía solar accesible y confiable para tu hogar o pyme
                    </h3>

                    <p className="lead text-muted mb-4">
                        Dimensiona tu sistema, conoce el costo estimado y solicita asesoría en minutos.
                        La DEMO te guía con valores referenciales.
                    </p>

                    <div className="d-flex flex-wrap gap-3">
                        <Button variant="warning" size="lg" href="#demo-calculadora">
                            Ver DEMO
                        </Button>

                        <Button variant="outline-dark" size="lg" href="/DnD_5E_CharacterSheet_FormFillable.pdf" download="Catalogo">
                            Descargar Catálogo
                        </Button>
                    </div>
                </div>

                {/* Columna imagen */}
                <div className="col-md-6 text-center mt-4 mt-md-0">
                    <img
                        src="/assets/images/fotos/foto-hero.png"
                        alt="Proyecto solar completado"
                        className="img-fluid shadow rounded"
                        style={{ maxWidth: '90%', objectFit: 'cover' }}
                    />
                </div>

            </div>
        </section>
    );
}

export default Hero;
