import './App.css';
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

function App() {
  return (
    <div className="">
      <Navbar/>
      <div className='container mt-5'>
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
  );
}

export default App;
