import React from 'react';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

function Calculadora() {

    // Variables de estado
    const [potenciaPanel, setPotenciaPanel] = useState(0);
    const [cantidadPanel, setCantidadPanel] = useState(0);
    const [inversorPrecio, setInversorPrecio] = useState(0);
    const [bateriaPrecio, setBateriaPrecio] = useState(0);
    const [batCantidad, setBatCantidad] = useState(0);
    const [estructurasPrecio, setEstructurasPrecio] = useState(0);
    const [instalacionBase, setInstalacionBase] = useState(0);
    const [pesoKg, setPesoKg] = useState(0);
    const [pieValor, setPieValor] = useState(0);

    const [techo, setTecho] = useState('');
    const [region, setRegion] = useState('');
    const [complejidad, setComplejidad] = useState('');
    const [subsidio, setSubsidio] = useState('');
    const [envio, setEnvio] = useState('');
    const [garantia, setGarantia] = useState('');
    const [planPago, setPlanPago] = useState('');
    const [tipoPie, setTipoPie] = useState('');

    //Constantes y porcentajes:
    const RECARGO_TECHO = techo == 1 ? 0.05 : techo == 2 ? 0.02 : techo == 3 ? 0.07 : 1;
    const SUB = subsidio == 1 ? 0.08 : subsidio == 2 ? 0.05 : 0;
    const COMP = complejidad == 1 ? 0.08 : complejidad == 2 ? 0.15 : 0;
    const IVA = 0.19;
    const ENVIO_BASE = region == 1 ? 5000 : region == 2 ? 9000 : region == 3 ? 10000 : region == 4 ? 15000 : 0;
    const METODO_ENV = envio == 1 ? 1.2 : 1;

    const GAR = { '12': 0.02, '24': 0.04, '36': 0.06 };
    const PLAN = {
        contado: { tasa: 0, cuotas: 1 },
        '6': { tasa: 0.012, cuotas: 6 },
        '12': { tasa: 0.011, cuotas: 12 },
        '24': { tasa: 0.010, cuotas: 24 }
    };

    // === Resultados y cálculos ===
    // Potencia estimada
    const potenciaEstimada = !potenciaPanel || !cantidadPanel ? '—' : (parseInt(potenciaPanel) * parseInt(cantidadPanel) / 1000);
    const advertenciaPotencia = potenciaEstimada > 7 && batCantidad == 0 ? 'Recomendado considerar almacenamiento para estabilidad del sistema' : '';

    // Subtotales equipos
    const costoPaneles = !potenciaPanel || !cantidadPanel ? 0 : (parseInt(potenciaPanel) * parseInt(cantidadPanel) * 800);
    const costoBaterias = !bateriaPrecio || !batCantidad ? 0 : (parseInt(bateriaPrecio) * parseInt(batCantidad));
    const costoInversor = !inversorPrecio ? 0 : parseInt(inversorPrecio);
    const costoEstructuras = !estructurasPrecio ? 0 : parseInt(estructurasPrecio);
    const subtotalEquipos = !costoInversor || !costoBaterias || !costoEstructuras ? '—' : costoPaneles + costoInversor + costoBaterias + costoEstructuras;

    // Recargo techo
    const recargoTecho = !subtotalEquipos || !techo ? '—' : subtotalEquipos * (RECARGO_TECHO || 1);
    const equiposConRecargo = !subtotalEquipos || !recargoTecho ? 0 : subtotalEquipos + recargoTecho;

    // Subsidio
    const subsidioMonto = !equiposConRecargo || !subsidio ? '—' : equiposConRecargo * (SUB || 0);

    // Instalación final
    const instalacionFinal = !instalacionBase || !complejidad ? '—' : parseInt(instalacionBase) * (1 + (COMP || 0));

    // IVA
    const baseIVA = !equiposConRecargo || !subsidioMonto || !instalacionFinal ? 0 : equiposConRecargo - subsidioMonto + instalacionFinal;
    const ivaMonto = !baseIVA ? '—' : baseIVA * IVA;

    // Envío
    const envioMonto = !region || !pesoKg || !envio ? '—' : (ENVIO_BASE + (parseInt(pesoKg) * 700)) * (METODO_ENV || 1);

    /*
        //contador:
        const n = (v) => {
            const x = Number(v);
            return Number.isFinite(x) && x > 0 ? x : 0; // número válido y evita negativos/NaN (si no es válido, devuelve 0)
        };
        //LocaleString para CLP
        const clp = (v) => `$${Math.round(v).toLocaleString('es-CL')}`;
    
        //Resultados

        const subtotalEquipos = costoPaneles + n(inversorPrecio) + costoBaterias + n(estructurasPrecio);
    
    
        // Recargo por tipo de techo (sobre subtotal de equipos)
        const recargoTecho = subtotalEquipos * (RECARGO_TECHO[techo] || 0);
        const equiposConRecargo = subtotalEquipos + recargoTecho;
    
    
        // Subsidio (porcentaje negativo) sobre equipos con recargo
        const subsidioMonto = equiposConRecargo * (SUB[subsidio] || 0);
    
    
        // Instalación final = base + % por complejidad
        const instalacionFinal = n(instalacionBase) * (1 + (COMP[complejidad] || 0));
    
    
        // IVA sobre (equipos con recargo - subsidio + instalación)
        const baseIVA = Math.max(0, equiposConRecargo - subsidioMonto + instalacionFinal);
        const ivaMonto = baseIVA * IVA;
    
    
        // Envío = base región + peso*700, multiplicado por método
        const envioMonto = ((ENVIO_BASE[region] || 0) + n(pesoKg) * COSTO_KG) * (ENVIO_MULT[envio] || 1);
    
    
        // Garantía = % sobre equipos con recargo (antes de subsidio)
        const garantiaMonto = equiposConRecargo * (GAR[garantia] || 0);
    
    
        // Total antes de financiar
        const totalAntesFinanciar = Math.max(0, equiposConRecargo - subsidioMonto + instalacionFinal + ivaMonto + envioMonto + garantiaMonto);
    
    
        // Financiamiento (interés simple)
        const plan = PLAN[planPago] || PLAN['contado'];
        let pie = 0;
        if (tipoPie === 'porcentaje') pie = totalAntesFinanciar * (n(pieValor) / 100);
        else pie = n(pieValor);
        pie = Math.min(Math.max(0, pie), totalAntesFinanciar); // limitar para no exceder
    
    
        const montoFinanciar = totalAntesFinanciar - pie;
        const interesTotal = montoFinanciar * plan.tasa * plan.cuotas;
        const cuota = plan.cuotas > 1 ? (montoFinanciar + interesTotal) / plan.cuotas : 0;
        const totalFinal = pie + montoFinanciar + interesTotal; // = totalAntes + interes
    
    
        // Advertencia simple
        const advertencia = potenciaKW > 7 && n(batCantidad) === 0 ? 'Recomendado considerar almacenamiento para estabilidad del sistema' : '';
    
        // ====== Acciones ======
        const limpiar = () => {
            setPotenciaPanel(0); setCantidadPanel(0); setPanelPrecio(0);
            setInversorPrecio(0); setBateriaPrecio(0); setBatCantidad(0);
            setEstructurasPrecio(0); setInstalacionBase(0); setPesoKg(0);
            setTecho(''); setRegion(''); setComplejidad(''); setSubsidio(''); setEnvio(''); setGarantia(''); setPlanPago('');
            setTipoPie('porcentaje'); setPieValor(0);
        };
    
    */
    return (
        <div id='demo-calculadora'>
            <div className='row mt-5'>
                <div className='col-lg-6'><h3>DEMO calculadora</h3></div>
                <div className='col-lg-6'><p className='text-end text-muted'>Maquetado de formulario y resumen.</p></div>
            </div>

            <div className='row'>
                <div className='col-lg-6'>
                    <Card className='p-3'>
                        <Card.Body>
                            <h5>Formulario</h5>
                            {/* Potencia y cantidad */}
                            <div className='row mt-4'>
                                <div className='col-lg-6'>
                                    <label className='form-label' htmlFor='potenciaPanel'>Potencia del panel (W)</label>
                                    <input id='potenciaPanel' name='potenciaPanel' placeholder='450' type='number' className='form-control' value={potenciaPanel} onChange={(e) => setPotenciaPanel(e.target.value)}></input>
                                </div>
                                <div className='col-lg-6'>
                                    <label className='form-label' htmlFor='cantidadPanel'>Cantidad de paneles</label>
                                    <input id='cantidadPanel' name='cantidadPanel' placeholder='8' type='number' className='form-control' value={cantidadPanel} onChange={(e) => setCantidadPanel(e.target.value)}></input>
                                </div>
                            </div>

                            {/* Inversor y batería */}
                            <div className='row mt-4'>
                                <div className='col-lg-6'>
                                    <label className='form-label' htmlFor='inversorPrecio'>Inversor (precio)</label>
                                    <input id='inversorPrecio' name='inversorPrecio' placeholder='650000' type='number' className='form-control' value={inversorPrecio} onChange={(e) => setInversorPrecio(e.target.value)}></input>
                                </div>
                                <div className='col-lg-6'>
                                    <label className='form-label' htmlFor='bateriaPrecio'>Batería (precio unidad)</label>
                                    <input id='bateriaPrecio' name='bateriaPrecio' placeholder='320000' type='number' className='form-control' value={bateriaPrecio} onChange={(e) => setBateriaPrecio(e.target.value)}></input>
                                </div>
                            </div>

                            {/* Cantidad y estructura */}
                            <div className='row mt-4'>
                                <div className='col-lg-6'>
                                    <label className='form-label' htmlFor='batCantidad'>Cantidad baterías</label>
                                    <input id='batCantidad' name='batCantidad' placeholder='1' type='number' className='form-control' value={batCantidad} onChange={(e) => setBatCantidad(e.target.value)}></input>
                                </div>
                                <div className='col-lg-6'>
                                    <label className='form-label' htmlFor='estructurasPrecio'>Estruct./cableado</label>
                                    <input id='estructurasPrecio' name='estructurasPrecio' placeholder='180000' type='number' className='form-control' value={estructurasPrecio} onChange={(e) => setEstructurasPrecio(e.target.value)}></input>
                                </div>
                                <label className='mt-2' style={{fontSize: '13px', color: 'red'}}>{advertenciaPotencia}</label>
                            </div>

                            {/* Instalación y peso */}
                            <div className='row mt-4'>
                                <div className='col-lg-6'>
                                    <label className='form-label' htmlFor='instalacionBase'>Instalación base</label>
                                    <input id='instalacionBase' name='instalacionBase' placeholder='350000' type='number' className='form-control' value={instalacionBase} onChange={(e) => setInstalacionBase(e.target.value)}></input>
                                </div>
                                <div className='col-lg-6'>
                                    <label className='form-label' htmlFor='pesoKg'>Peso envío (kg)</label>
                                    <input id='pesoKg' name='pesoKg' placeholder='90' type='number' className='form-control' value={pesoKg} onChange={(e) => setPesoKg(e.target.value)}></input>
                                </div>
                            </div>

                            {/* Tipo techo y región */}
                            <div className='row mt-4'>
                                <div className='col-lg-6'>
                                    <label className='form-label' htmlFor='techo'>Tipo de techo</label>
                                    <select className='form-select' id='techo' name='techo' value={techo} onChange={(e) => setTecho(e.target.value)}>
                                        <option value={1}>Teja/Asfalto</option>
                                        <option value={2}>Zinc/Planchas</option>
                                        <option value={3}>Hormigón</option>
                                    </select>
                                </div>
                                <div className='col-lg-6'>
                                    <label className='form-label' htmlFor='region'>Región</label>
                                    <select className='form-select' id='region' name='region' value={region} onChange={(e) => setRegion(e.target.value)}>
                                        <option value={1}>RM ($5.000)</option>
                                        <option value={2}>Norte ($9.000)</option>
                                        <option value={3}>Sur ($10.000)</option>
                                        <option value={4}>Austral ($15.000)</option>
                                    </select>
                                </div>
                            </div>

                            {/* Complejidad y subsidio */}
                            <div className='row mt-4'>
                                <div className='col-lg-6'>
                                    <label className='form-label' htmlFor='complejidad'>Complejidad instalación</label>
                                    <select className='form-select' id='complejidad' name='complejidad' value={complejidad} onChange={(e) => setComplejidad(e.target.value)}>
                                        <option >Baja (0%)</option>
                                        <option value={1}>Media (8%)</option>
                                        <option value={2}>Alta (15%)</option>
                                    </select>
                                </div>
                                <div className='col-lg-6'>
                                    <label className='form-label' htmlFor='subsidio'>Subsidio</label>
                                    <select className='form-select' id='subsidio' name='subsidio' value={subsidio} onChange={(e) => setSubsidio(e.target.value)}>
                                        <option >Sin subsidio (0%)</option>
                                        <option value={1}>Residencial (8%)</option>
                                        <option value={2}>Pyme (5%)</option>
                                    </select>
                                </div>
                            </div>

                            {/* Envío y garantía */}
                            <div className='row mt-4'>
                                <div className='col-lg-6'>
                                    <label className='form-label' htmlFor='envio'>Método de envío</label>
                                    <select className='form-select' id='envio' name='envio' value={envio} onChange={(e) => setEnvio(e.target.value)}>
                                        <option>Estándar (x1.00)</option>
                                        <option value={1}>Exprés (x1.20)</option>
                                    </select>
                                </div>
                                <div className='col-lg-6'>
                                    <label className='form-label' htmlFor='garantia'>Garantía</label>
                                    <select className='form-select' id='garantia' name='garantia' value={garantia} onChange={(e) => setGarantia(e.target.value)}>
                                        <option value={1}>12 meses (+2%)</option>
                                        <option value={2}>24 meses (+4%)</option>
                                        <option value={3}>36 meses (+6%)</option>
                                    </select>
                                </div>
                            </div>

                            {/* Plan y pie */}
                            <div className='row mt-4'>
                                <div className='col-lg-6'>
                                    <label className='form-label' htmlFor='planPago'>Plan de pago</label>
                                    <select className='form-select' id='planPago' name='planPago' value={planPago} onChange={(e) => setPlanPago(e.target.value)}>
                                        <option value={1}>Contado (0%)</option>
                                        <option value={2}>6 cuotas (1.2%)</option>
                                        <option value={3}>12 cuotas (1.1%)</option>
                                        <option value={4}>24 cuotas (1.0%)</option>
                                    </select>
                                </div>
                                <div className='col-lg-6'>
                                    <label className='form-label' htmlFor='tipoPie'>Tipo de pie</label>
                                    <select className='form-select' id='tipoPie' name='tipoPie' value={tipoPie} onChange={(e) => setTipoPie(e.target.value)}>
                                        <option value={1}>Porcentaje</option>
                                        <option value={2}>Monto fijo</option>
                                    </select>
                                </div>
                            </div>

                            {/* Valor de pie */}
                            <div className='row mt-4'>
                                <div className='col-lg-6'>
                                    <label className='form-label' htmlFor='pieValor'>Valor de pie</label>
                                    <input id='pieValor' name='pieValor' placeholder='10' type='number' className='form-control' value={pieValor} onChange={(e) => setPieValor(e.target.value)}></input>
                                    <label className='text-muted mt-2' style={{fontSize: '13px'}}>Si es porcentaje, 10 = 10%</label>
                                </div>
                            </div>

                            <div className='mt-3'>
                                <Button variant='outline-dark' onClick={(e) => {
                                    setPotenciaPanel(0);
                                    setCantidadPanel(0);
                                    setInversorPrecio(0);
                                    setBateriaPrecio(0);
                                    setBatCantidad(0);
                                    setEstructurasPrecio(0);
                                    setInstalacionBase(0);
                                    setPesoKg(0);
                                    setPieValor(0);
                                    setTecho('');
                                    setRegion('');
                                    setComplejidad('');
                                    setSubsidio('');
                                    setEnvio('');
                                    setGarantia('');
                                    setPlanPago('');
                                    setTipoPie('');
                                }}>Reiniciar</Button>
                                <Button variant='outline-dark' className='m-3'>Copiar resumen</Button>
                            </div>

                        </Card.Body>
                    </Card>
                </div>

                <div className='col-lg-6'>
                    <Card className='p-3'>
                        <Card.Body>
                            <h5>Resumen</h5>
                            <Table striped bordered hover>
                                <tbody>
                                    <tr>
                                        <td>Potencia estimada (kW)</td>
                                        <td>{potenciaEstimada}</td>
                                    </tr>
                                    <tr>
                                        <td>Subtotal equipos</td>
                                        <td>${subtotalEquipos.toLocaleString()}</td>
                                    </tr>
                                    <tr>
                                        <td>Recargo techo</td>
                                        <td>${recargoTecho.toLocaleString()}</td>
                                    </tr>
                                    <tr>
                                        <td>Subsidio</td>
                                        <td>- ${subsidioMonto.toLocaleString()}</td>
                                    </tr>
                                    <tr>
                                        <td>Instalación final</td>
                                        <td>${instalacionFinal.toLocaleString()}</td>
                                    </tr>
                                    <tr>
                                        <td>IVA 19%</td>
                                        <td>${ivaMonto.toLocaleString()}</td>
                                    </tr>
                                    <tr>
                                        <td>Envío</td>
                                        <td>${envioMonto.toLocaleString()}</td>
                                    </tr>
                                    <tr>
                                        <td>Garantía</td>
                                        <td>${}</td>
                                    </tr>
                                    <tr>
                                        <td>Total antes de financiar</td>
                                        <td>${}</td>
                                    </tr>
                                    <tr>
                                        <td>Pie</td>
                                        <td>${}</td>
                                    </tr>
                                    <tr>
                                        <td>Interés total</td>
                                        <td>${}</td>
                                    </tr>
                                    <tr>
                                        <td>Cuota</td>
                                        <td>${}</td>
                                    </tr>
                                    <tr style={{fontWeight: 'bold', fontSize: '18px'}}>
                                        <td>Total final</td>
                                        <td>${}</td>
                                    </tr>
                                </tbody>
                            </Table>

                            <Badge pill bg='warning'>Valores referenciales para el prototipo</Badge>
                        </Card.Body>
                    </Card>
                </div>

            </div>
        </div>
    );
}

export default Calculadora;