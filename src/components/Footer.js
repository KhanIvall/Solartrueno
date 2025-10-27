import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary mt-5">
            <div className="text-center py-4">
                <div className="row">
                    <div className="col-lg-6">
                        <p className="text-light text-sm mb-2">
                            © {currentYear} SolarTrueno Energía
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <div className="flex justify-center gap-4 text-sm">
                            <a href="#privacidad" className="text-light hover:underline">
                                Privacidad
                            </a>
                            <span className="text-light"> • </span>
                            <a href="#terminos" className="text-light hover:underline">
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