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
      </Routes>
    </Router>
  );
}

export default App;
