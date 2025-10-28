import React from 'react';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

function Calculadora() {

    // variables de estado
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

    /*
        //contador:
        const n = (v) => {
            const x = Number(v);
            return Number.isFinite(x) && x > 0 ? x : 0; // número válido y evita negativos/NaN (si no es válido, devuelve 0)
        };
        //LocaleString para CLP
        const clp = (v) => `$${Math.round(v).toLocaleString('es-CL')}`;
    
        // ====== Formulario:no permitir negativos; placeholders claros ======
        const [potenciaPanel, setPotenciaPanel] = useState(0); // potencia por panel (W)
        const [cantidadPanel, setCantidadPanel] = useState(0); // cantidad paneles
        const [panelPrecio, setPanelPrecio] = useState(0); // precio por panel 
        const [inversorPrecio, setInversorPrecio] = useState(0);
        const [bateriaPrecio, setBateriaPrecio] = useState(0); // precio por batería
        const [batCantidad, setBatCantidad] = useState(0); // cantidad baterías
        const [estructurasPrecio, setEstructurasPrecio] = useState(0); // estructuras y cableado
        const [instalacionBase, setInstalacionBase] = useState(0);
        const [pesoKg, setPesoKg] = useState(0);
    
        //Selects obligatorios (con valores que afectan el cálculo)
        const [techo, setTecho] = useState(''); // teja/zinc/hormigon
        const [region, setRegion] = useState(''); // rm/norte/sur/austral
        const [complejidad, setComplejidad] = useState(''); // baja/media/alta
        const [subsidio, setSubsidio] = useState(''); // sin/residencial/pyme
        const [envio, setEnvio] = useState(''); // estandar//expres
        const [garantia, setGarantia] = useState(''); // 12/24/36
        const [planPago, setPlanPago] = useState(''); // contado/6/12/24
    
        //Constantes y porcentajes:
    
        const RECARGO_TECHO = { teja: 0.05, zinc: 0.02, hormigon: 0.07 };
        const ENVIO_BASE = { rm: 5000, norte: 9000, sur: 10000, austral: 15000 };
        const COMP = { baja: 0, media: 0.08, alta: 0.15 };
        const SUB = { sin: 0, residencial: -0.08, pyme: -0.05 }; // negativo = descuento
        const ENVIO_MULT = { estandar: 1, expres: 1.2 };
        const GAR = { '12': 0.02, '24': 0.04, '36': 0.06 };
        const PLAN = {
            contado: { tasa: 0, cuotas: 1 },
            '6': { tasa: 0.012, cuotas: 6 },
            '12': { tasa: 0.011, cuotas: 12 },
            '24': { tasa: 0.010, cuotas: 24 }
        };
        const IVA = 0.19;
        const COSTO_KG = 700;
    
    
        //Resultados
    
        const potenciaKW = (n(potenciaPanel) * n(cantidadPanel)) / 1000; // referencia
    
    
        // Paneles opcional: si panelPrecio = 0, no suma (solo se usa potencia como referencia)
        const costoPaneles = n(panelPrecio) > 0 ? n(panelPrecio) * n(cantidadPanel) : 0;
        const costoBaterias = n(bateriaPrecio) * n(batCantidad);
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
                                        <option>Teja/Asfalto</option>
                                        <option value={1}>Zinc/Planchas</option>
                                        <option value={2}>Hormigón</option>
                                    </select>
                                </div>
                                <div className='col-lg-6'>
                                    <label className='form-label' htmlFor='region'>Región</label>
                                    <select className='form-select' id='region' name='region' value={region} onChange={(e) => setRegion(e.target.value)}>
                                        <option>RM ($5.000)</option>
                                        <option value={1}>Norte ($9.000)</option>
                                        <option value={2}>Sur ($10.000)</option>
                                        <option value={3}>Austral ($15.000)</option>
                                    </select>
                                </div>
                            </div>

                            {/* Complejidad y subsidio */}
                            <div className='row mt-4'>
                                <div className='col-lg-6'>
                                    <label className='form-label' htmlFor='complejidad'>Complejidad instalación</label>
                                    <select className='form-select' id='complejidad' name='complejidad' value={complejidad} onChange={(e) => setComplejidad(e.target.value)}>
                                        <option>Baja (0%)</option>
                                        <option value={1}>Media (8%)</option>
                                        <option value={2}>Alta (15%)</option>
                                    </select>
                                </div>
                                <div className='col-lg-6'>
                                    <label className='form-label' htmlFor='subsidio'>Subsidio</label>
                                    <select className='form-select' id='subsidio' name='subsidio' value={subsidio} onChange={(e) => setSubsidio(e.target.value)}>
                                        <option>Sin subsidio (0%)</option>
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
                                        <option>12 meses (+2%)</option>
                                        <option value={1}>24 meses (+4%)</option>
                                        <option value={2}>36 meses (+6%)</option>
                                    </select>
                                </div>
                            </div>

                            {/* Plan y pie */}
                            <div className='row mt-4'>
                                <div className='col-lg-6'>
                                    <label className='form-label' htmlFor='planPago'>Plan de pago</label>
                                    <select className='form-select' id='planPago' name='planPago' value={planPago} onChange={(e) => setPlanPago(e.target.value)}>
                                        <option>Contado (0%)</option>
                                        <option value={1}>6 cuotas (1.2%)</option>
                                        <option value={2}>12 cuotas (1.1%)</option>
                                        <option value={3}>24 cuotas (1.0%)</option>
                                    </select>
                                </div>
                                <div className='col-lg-6'>
                                    <label className='form-label' htmlFor='tipoPie'>Tipo de pie</label>
                                    <select className='form-select' id='tipoPie' name='tipoPie' value={tipoPie} onChange={(e) => setTipoPie(e.target.value)}>
                                        <option>Porcentaje</option>
                                        <option value={1}>Monto fijo</option>
                                    </select>
                                </div>
                            </div>

                            {/* Valor de pie */}
                            <div className='row mt-4'>
                                <div className='col-lg-6'>
                                    <label className='form-label' htmlFor='pieValor'>Valor de pie</label>
                                    <input id='pieValor' name='pieValor' placeholder='10' type='number' className='form-control' value={pieValor} onChange={(e) => setPieValor(e.target.value)}></input>
                                    <label className='text-muted mt-2'>Si es porcentaje, 10 = 10%</label>
                                </div>
                            </div>

                            <div className='mt-3'>
                                <Button variant='outline-dark'>Reiniciar</Button>
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
                                        <td>a</td>
                                        <td>b</td>
                                    </tr>
                                    <tr>
                                        <td>a</td>
                                        <td>b</td>
                                    </tr>
                                    <tr>
                                        <td>a</td>
                                        <td>b</td>
                                    </tr>
                                    <tr>
                                        <td>a</td>
                                        <td>b</td>
                                    </tr>
                                    <tr>
                                        <td>a</td>
                                        <td>b</td>
                                    </tr>
                                    <tr>
                                        <td>a</td>
                                        <td>b</td>
                                    </tr>
                                    <tr>
                                        <td>a</td>
                                        <td>b</td>
                                    </tr>
                                    <tr>
                                        <td>a</td>
                                        <td>b</td>
                                    </tr>
                                    <tr>
                                        <td>a</td>
                                        <td>b</td>
                                    </tr>
                                    <tr>
                                        <td>a</td>
                                        <td>b</td>
                                    </tr>
                                    <tr>
                                        <td>a</td>
                                        <td>b</td>
                                    </tr>
                                    <tr>
                                        <td>a</td>
                                        <td>b</td>
                                    </tr>
                                    <tr>
                                        <td>a</td>
                                        <td>b</td>
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