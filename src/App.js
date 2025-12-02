import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Calc from './components/CalculadoraIntegral';
import Hero from './components/Hero';
import Services from './components/Servicios';
import Solutions from './components/Soluciones';
import Plans from './components/Planes';
import Testimonies from './components/Testimonios';
import FAQs from './components/FAQ';
import Contact from './components/Contacto';
import Foot from './components/Footer';
import CarruselPrincipal from './components/Carrusel';
import DashboardHome from './adminlte/pages/dashboard';
import ListadoPlanes from './adminlte/pages/planes';
import DetallePlan from './adminlte/pages/plan';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={
          <div className="">
            <Navbar/>
            <div className='container mt-5'>
              <CarruselPrincipal/>
              <Hero/>
              <Services/>
              <Solutions/>
              <Calc/>
              <Plans/>
              <Testimonies/>
              <FAQs/>
              <Contact/>
            </div>
            <Foot/>
          </div>
        } />
        
        {/* Ruta del dashboard */}
        <Route path="/dashboard" element={<DashboardHome />} />
        {/* Ruta de los planes */}
        <Route path="/plans" element={<ListadoPlanes />} />
        {/* Ruta de un plan */}
        <Route path="/plan/:id" element={<DetallePlan />} />
      </Routes>
    </Router>
  );
}

export default App;
