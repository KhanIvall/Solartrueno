import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();

    console.log("Renderizando Footer");

    return (
        <footer className="bg-dark text-warning mt-5">
            <div className="text-center py-4">
                <div className="row">
                    <div className="col-lg-6">
                        <p className="mb-2">
                            © {currentYear} SolarTrueno Energía
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <div className="d-flex justify-content-center gap-3">
                            <a href="#privacidad" className="text-warning text-decoration-none">
                                Privacidad
                            </a>
                            <span>•</span>
                            <a href="#terminos" className="text-warning text-decoration-none">
                                Términos
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;


