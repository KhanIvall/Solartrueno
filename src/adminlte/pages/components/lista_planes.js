import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';

function ListaPlanes() {

    const [planes, setPlanes] = useState([]);
    useEffect(
        () => {
            Axios.get('http://localhost:3001/api/plans')
                .then((response) => setPlanes(response.data))
                .catch((error) => console.log(error))
        }, []
    );

    console.log(planes);

    return (
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Planes</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="/dashboard">Dashboard</a></li>
                                <li className="breadcrumb-item active">Planes</li>
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
                            {
                                planes.map((plan) => {
                                    return (
                                        <div key={plan.id} className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                                            <div className="card bg-light d-flex flex-fill">
                                                <div className="card-header text-muted border-bottom-0">
                                                    <i className="fas fa-bolt mr-1"></i>
                                                    <strong>{plan.capacidad}</strong>
                                                </div>
                                                <div className="card-body pt-0">
                                                    <div className="row mt-3">
                                                        <div className="col-12">
                                                            <h2 className="lead"><b>{plan.nombrePlan}</b></h2>
                                                            
                                                            <p className="text-muted text-sm">
                                                                <b>Disponibilidad: </b> 
                                                                {plan.disponibilidad === 'inmediata' ? (
                                                                    <span className="badge badge-success ml-1">Inmediata</span>
                                                                ) : (
                                                                    <span className="badge badge-warning ml-1">Pendiente confirmación</span>
                                                                )}
                                                            </p>
                                                            
                                                            <p className="text-muted text-sm mb-2">
                                                                <b>Certificación: </b>
                                                                {plan.certificacion === 'si' ? (
                                                                    <span className="badge badge-success ml-1">
                                                                        <i className="fas fa-check mr-1"></i>Certificado
                                                                    </span>
                                                                ) : (
                                                                    <span className="badge badge-secondary ml-1">No certificado</span>
                                                                )}
                                                            </p>
                                                            
                                                            <p className="text-muted text-sm mb-2">
                                                                <b>Clientes Activos: </b>
                                                                <span className="badge badge-primary ml-1">{plan.clientesActivos}</span>
                                                            </p>
                                                            
                                                            <div className="mt-2">
                                                                <b className="text-sm">Características:</b>
                                                                <div className="mt-1">
                                                                    {plan.caracteristicas.map((caracteristica, index) => (
                                                                        <span key={index} className="badge badge-info mr-1 mb-1">
                                                                            {caracteristica}
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-footer">
                                                    <div className="text-right">
                                                        <a href="#" className="btn btn-sm bg-teal">
                                                            <i className="fas fa-comments" />
                                                        </a>
                                                        <a href={'/plan/' + plan.id} className="btn btn-sm btn-primary">
                                                            <i className="fas fa-user" /> Ver Detalles
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    
                    {/* /.card-body */}
                    <div className="card-footer">
                        <nav aria-label="Contacts Page Navigation">
                            <ul className="pagination justify-content-center m-0">
                                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#">4</a></li>
                                <li className="page-item"><a className="page-link" href="#">5</a></li>
                                <li className="page-item"><a className="page-link" href="#">6</a></li>
                                <li className="page-item"><a className="page-link" href="#">7</a></li>
                                <li className="page-item"><a className="page-link" href="#">8</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ListaPlanes;