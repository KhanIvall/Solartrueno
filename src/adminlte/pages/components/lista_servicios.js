import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

function ListaServicios() {

    const [servicios, setServicios] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/api/servicios')
            .then((response) => {
                if (Array.isArray(response.data)) {
                    setServicios(response.data);
                } else {
                    console.log("La respuesta no es un array:", response.data);
                }
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Catálogo de Servicios</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                                <li className="breadcrumb-item active">Servicios</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main content */}
            <section className="content">
                <div className="card card-solid">
                    <div className="card-body pb-0">
                        <div className="row">
                            {servicios.length > 0 ? (
                                servicios.map((servicio) => {
                                    return (
                                        <div key={servicio.id} className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                                            <div className="card bg-light d-flex flex-fill">
                                                <div className="card-header text-muted border-bottom-0">
                                                    <i className="fas fa-briefcase mr-1"></i>
                                                    <strong>{servicio.tipoServicio}</strong>
                                                </div>
                                                <div className="card-body pt-0">
                                                    <div className="row mt-3">
                                                        <div className="col-12">
                                                            <h2 className="lead"><b>{servicio.nombreServicio}</b></h2>

                                                            <p className="text-muted text-sm" style={{ minHeight: '40px' }}>
                                                                {servicio.descripcion}
                                                            </p>

                                                            <div className="mt-3">
                                                                <p className="text-muted text-sm mb-1">
                                                                    <b>Disponibilidad: </b>
                                                                    {servicio.disponibilidad === 'inmediata' ? (
                                                                        <span className="badge badge-success ml-1">Inmediata</span>
                                                                    ) : (
                                                                        <span className="badge badge-warning ml-1">Pendiente confirmación</span>
                                                                    )}
                                                                </p>

                                                                <p className="text-muted text-sm mb-0">
                                                                    <b>Certificación: </b>
                                                                    {servicio.certificacion === 'si' ? (
                                                                        <span className="badge badge-success ml-1">
                                                                            <i className="fas fa-check mr-1"></i>Incluida
                                                                        </span>
                                                                    ) : (
                                                                        <span className="badge badge-secondary ml-1">No aplica</span>
                                                                    )}
                                                                </p>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-footer">
                                                    <div className="text-right">
                                                        <a href="#" className="btn btn-sm bg-teal">
                                                            <i className="fas fa-comments" />
                                                        </a>
                                                        <a href="#" className="btn btn-sm btn-primary ml-1">
                                                            <i className="fas fa-eye mr-1" /> Ver Ficha
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            ) : (
                                <div className="col-12 text-center py-5">
                                    <p className="text-muted">Cargando servicios o no hay datos disponibles...</p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="card-footer">
                        <nav aria-label="Contacts Page Navigation">
                            <ul className="pagination justify-content-center m-0">
                                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ListaServicios;