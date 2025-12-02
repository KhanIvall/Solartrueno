import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Axios from 'axios';

function DetalleServicio() {

    const { id } = useParams();

    const [nombreServicio, setNombreServicio] = useState('');
    const [tipoServicio, setTipoServicio] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [certificacion, setCertificacion] = useState('');
    const [disponibilidad, setDisponibilidad] = useState('');

    useEffect(() => {
        Axios.get('http://localhost:3001/api/servicios')
            .then((response) => {
                const servicios = response.data;
                const servicioEncontrado = servicios.find(s => s.id == id);

                if (servicioEncontrado) {
                    setNombreServicio(servicioEncontrado.nombreServicio);
                    setTipoServicio(servicioEncontrado.tipoServicio);
                    setDescripcion(servicioEncontrado.descripcion);
                    setCertificacion(servicioEncontrado.certificacion);
                    setDisponibilidad(servicioEncontrado.disponibilidad);
                }
            })
            .catch((error) => console.log(error));
    }, [id]);

    return (
        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Detalle de Servicio</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
                                <li className="breadcrumb-item"><Link to="/servicios">Servicios</Link></li>
                                <li className="breadcrumb-item active">Detalle</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-8">

                            <div className="card card-teal card-outline">
                                <div className="card-header">
                                    <h3 className="card-title">
                                        <i className="fas fa-info-circle mr-1"></i>
                                        Información del Servicio #{id}
                                    </h3>
                                </div>

                                <div className="card-body">
                                    <strong><i className="fas fa-briefcase mr-1"></i> Nombre del Servicio</strong>
                                    <p className="text-muted">
                                        {nombreServicio || 'Cargando...'}
                                    </p>
                                    <hr />

                                    <strong><i className="fas fa-tag mr-1"></i> Tipo / Categoría</strong>
                                    <p className="text-muted">
                                        {tipoServicio}
                                    </p>
                                    <hr />

                                    <strong><i className="fas fa-align-left mr-1"></i> Descripción Técnica</strong>
                                    <p className="text-muted">
                                        {descripcion}
                                    </p>
                                    <hr />

                                    <strong><i className="fas fa-certificate mr-1"></i> Certificación</strong>
                                    <p className="text-muted">
                                        {certificacion === 'si' ? (
                                            <span className="badge badge-success">
                                                <i className="fas fa-check mr-1"></i>Certificado Incluido
                                            </span>
                                        ) : (
                                            <span className="badge badge-secondary">
                                                No requiere / No incluida
                                            </span>
                                        )}
                                    </p>
                                    <hr />

                                    <strong><i className="fas fa-clock mr-1"></i> Estado de Disponibilidad</strong>
                                    <p className="text-muted">
                                        {disponibilidad === 'inmediata' ? (
                                            <span className="badge badge-success">Inmediata</span>
                                        ) : (
                                            <span className="badge badge-warning">Pendiente confirmación</span>
                                        )}
                                    </p>
                                </div>

                                <div className="card-footer text-center">
                                    <Link to="/servicios" className="btn btn-secondary mr-2">
                                        <i className="fas fa-arrow-left mr-1"></i> Volver
                                    </Link>
                                    <button className="btn btn-teal">
                                        <i className="fas fa-edit mr-1"></i> Editar Servicio
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default DetalleServicio;