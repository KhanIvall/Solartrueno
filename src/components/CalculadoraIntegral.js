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

    //Constantes y porcentajes (manteniendo tu estilo y valores por defecto)
    const RECARGO_TECHO = techo == 1 ? 0.05 : techo == 2 ? 0.02 : techo == 3 ? 0.07 : 1;
    const SUB = subsidio == 1 ? 0.08 : subsidio == 2 ? 0.05 : 0; // positivo, luego restamos en la vista
    const COMP = complejidad == 1 ? 0.08 : complejidad == 2 ? 0.15 : 0;
    const IVA = 0.19;
    const ENVIO_BASE = region == 1 ? 5000 : region == 2 ? 9000 : region == 3 ? 10000 : region == 4 ? 15000 : 0;
    const METODO_ENV = envio == 1 ? 1.2 : 1;

    const GAR = { '12': 0.02, '24': 0.04, '36': 0.06 };
    const PLAN = {
        contado: { tasa: 0, tasaLabel: '0%', cuotas: 1 },
        '6': { tasa: 0.012, tasaLabel: '1.2% m', cuotas: 6 },
        '12': { tasa: 0.011, tasaLabel: '1.1% m', cuotas: 12 },
        '24': { tasa: 0.010, tasaLabel: '1.0% m', cuotas: 24 }
    };

    // === Resultados y cálculos ===
    // Potencia estimada
    const potenciaEstimada = !potenciaPanel || !cantidadPanel ? '—' : (parseInt(potenciaPanel) * parseInt(cantidadPanel) / 1000);
    const advertenciaPotencia = potenciaEstimada > 7 && batCantidad == 0 ? 'Recomendado considerar almacenamiento para estabilidad del sistema' : '';

    // Subtotales equipos (mantengo tu fórmula de paneles por potencia*800)
    const costoPaneles = !potenciaPanel || !cantidadPanel ? 0 : (parseInt(potenciaPanel) * parseInt(cantidadPanel) * 800);
    const costoBaterias = !bateriaPrecio || !batCantidad ? 0 : (parseInt(bateriaPrecio) * parseInt(batCantidad));
    const costoInversor = !inversorPrecio ? 0 : parseInt(inversorPrecio);
    const costoEstructuras = !estructurasPrecio ? 0 : parseInt(estructurasPrecio);
    const subtotalEquipos = !costoInversor || !costoBaterias || !costoEstructuras ? '—' : costoPaneles + costoInversor + costoBaterias + costoEstructuras;

    // Recargo techo
    const recargoTecho = !subtotalEquipos || !techo ? '—' : subtotalEquipos * (RECARGO_TECHO || 1);
    const equiposConRecargo = !subtotalEquipos || !recargoTecho ? 0 : subtotalEquipos + recargoTecho;

    // Subsidio (porcentaje positivo; se mostrará con signo - en la tabla)
    const subsidioMonto = !equiposConRecargo || !subsidio ? '—' : equiposConRecargo * (SUB || 0);

    // Instalación final
    const instalacionFinal = !instalacionBase || !complejidad ? '—' : parseInt(instalacionBase) * (1 + (COMP || 0));

    // IVA
    const baseIVA = !equiposConRecargo || !subsidioMonto || !instalacionFinal ? 0 : equiposConRecargo - subsidioMonto + instalacionFinal;
    const ivaMonto = !baseIVA ? '—' : baseIVA * IVA;

    // Envío
    const envioMonto = !region || !pesoKg || !envio ? '—' : (ENVIO_BASE + (parseInt(pesoKg) * 700)) * (METODO_ENV || 1);

    // Garantía (según selección 12/24/36)
    const garantiaPct = garantia == 1 ? GAR['12'] : garantia == 2 ? GAR['24'] : garantia == 3 ? GAR['36'] : 0;
    const garantiaMonto = !equiposConRecargo || !garantia ? '—' : equiposConRecargo * garantiaPct;

    // Total antes de financiar
    const totalAntesFinanciar = !equiposConRecargo || !instalacionFinal || !ivaMonto || !envioMonto || !garantiaMonto ? '—' : (equiposConRecargo - subsidioMonto + instalacionFinal + ivaMonto + envioMonto + garantiaMonto);

    // Financiamiento (interés simple)
    const planKey = planPago == 1 ? 'contado' : planPago == 2 ? '6' : planPago == 3 ? '12' : planPago == 4 ? '24' : 'contado';
    const plan = PLAN[planKey];

    const pie = !totalAntesFinanciar || !pieValor || !tipoPie ? '—' : (
        tipoPie == 1
          ? (totalAntesFinanciar * (parseInt(pieValor) / 100))
          : parseInt(pieValor)
    );

    const montoFinanciar = !totalAntesFinanciar || !pie || pie === '—' ? '—' : (totalAntesFinanciar - pie);
    const interesTotal = !montoFinanciar || montoFinanciar === '—' ? '—' : (montoFinanciar * plan.tasa * plan.cuotas);
    const cuota = !montoFinanciar || montoFinanciar === '—' ? '—' : (plan.cuotas > 1 ? (montoFinanciar + interesTotal) / plan.cuotas : 0);
    const totalFinal = !montoFinanciar || montoFinanciar === '—' ? '—' : (pie + montoFinanciar + interesTotal);

    // Acciones
    const copiarResumen = async () => {
      const filas = [
        ['Potencia estimada (kW)', potenciaEstimada],
        ['Subtotal equipos', subtotalEquipos],
        ['Recargo techo', recargoTecho],
        ['Subsidio', subsidioMonto ? `- ${subsidioMonto}` : subsidioMonto],
        ['Instalación final', instalacionFinal],
        ['IVA (19%)', ivaMonto],
        ['Envío', envioMonto],
        ['Garantía', garantiaMonto],
        ['Total antes de financiar', totalAntesFinanciar],
        ['Pie', pie],
        ['Interés total', interesTotal],
        ['Cuota', cuota],
        ['Total final', totalFinal],
      ];
      try {
        await navigator.clipboard.writeText(filas.map(([k,v]) => `${k}: ${v}`).join('\n'));
        alert('Resumen copiado ✅');
      } catch (e) {
        alert('No se pudo copiar el resumen');
      }
    };

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
                                <Button variant='outline-dark' className='m-3' onClick={copiarResumen}>Copiar resumen</Button>
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
                                        <td>${garantiaMonto.toLocaleString()}</td>
                                    </tr>
                                    <tr>
                                        <td>Total antes de financiar</td>
                                        <td>${totalAntesFinanciar.toLocaleString()}</td>
                                    </tr>
                                    <tr>
                                        <td>Pie</td>
                                        <td>${(pie && pie !== '—') ? parseInt(pie).toLocaleString() : ''}</td>
                                    </tr>
                                    <tr>
                                        <td>Interés total</td>
                                        <td>${(interesTotal && interesTotal !== '—') ? parseInt(interesTotal).toLocaleString() : ''}</td>
                                    </tr>
                                    <tr>
                                        <td>Cuota</td>
                                        <td>${(cuota && cuota !== '—') ? parseInt(cuota).toLocaleString() : ''}</td>
                                    </tr>
                                    <tr style={{fontWeight: 'bold', fontSize: '18px'}}>
                                        <td>Total final</td>
                                        <td>${(totalFinal && totalFinal !== '—') ? parseInt(totalFinal).toLocaleString() : ''}</td>
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