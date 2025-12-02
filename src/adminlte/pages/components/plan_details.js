import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Axios from 'axios';

function PlanDetails() {

    const { id } = useParams();
    const [planNombre, setPlanNombre] = useState('');
    const [planCapacidad, setPlanCapacidad] = useState('');
    const [planCaracteristicas, setPlanCaracteristicas] = useState([]);
    const [planCertificacion, setPlanCertificacion] = useState('');
    const [planDisponibilidad, setPlanDisponibilidad] = useState('');
    const [planClientesActivos, setPlanClientesActivos] = useState(0);

    console.log('valor id: ' + id);

    useEffect(
        () => {
            Axios.get('http://localhost:3001/api/plan/' + id)
                .then((response) => {
                    const plan = Array.isArray(response.data) ? response.data[0] : response.data;
                    
                    setPlanNombre(plan.nombrePlan);
                    setPlanCapacidad(plan.capacidad);
                    setPlanCaracteristicas(plan.caracteristicas);
                    setPlanCertificacion(plan.certificacion);
                    setPlanDisponibilidad(plan.disponibilidad);
                    setPlanClientesActivos(plan.clientesActivos);
                })
                .catch((error) => console.log(error))
        }, [id]
    );

    return (
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Plan</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active">Plan</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Main content */}
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            {/* Details Box */}
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">Detalles del plan</h3>
                                </div>
                                
                                <div className="card-body">
                                    <strong><i className="fas fa-bookmark mr-1"></i> Nombre del Plan</strong>
                                    <p className="text-muted">{planNombre}</p>
                                    <hr />
                                    
                                    <strong><i className="fas fa-bolt mr-1"></i> Capacidad</strong>
                                    <p className="text-muted">{planCapacidad}</p>
                                    <hr />
                                    
                                    <strong><i className="fas fa-list mr-1"></i> Características</strong>
                                    <p className="text-muted">
                                        {planCaracteristicas.map((caracteristica, index) => (
                                            <span key={index} className="badge badge-info mr-1">
                                                {caracteristica}
                                            </span>
                                        ))}
                                    </p>
                                    <hr />
                                    
                                    <strong><i className="fas fa-certificate mr-1"></i> Certificación</strong>
                                    <p className="text-muted">
                                        {planCertificacion === 'si' ? (
                                            <span className="badge badge-success">Certificado</span>
                                        ) : (
                                            <span className="badge badge-secondary">No certificado</span>
                                        )}
                                    </p>
                                    <hr />
                                    
                                    <strong><i className="fas fa-clock mr-1"></i> Disponibilidad</strong>
                                    <p className="text-muted">
                                        {planDisponibilidad === 'inmediata' ? (
                                            <span className="badge badge-success">Inmediata</span>
                                        ) : (
                                            <span className="badge badge-warning">Pendiente confirmación</span>
                                        )}
                                    </p>
                                    <hr />
                                    
                                    <strong><i className="fas fa-users mr-1"></i> Clientes Activos</strong>
                                    <p className="text-muted">
                                        <span className="badge badge-primary" style={{fontSize: '1rem'}}>
                                            {planClientesActivos}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PlanDetails;