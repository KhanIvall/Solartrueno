import './App.css';
import Navbar from './components/Navbar';
import Calc from './components/CalculadoraIntegral';
import Hero from './components/Hero';
import Services from './components/Servicios';
import Solutions from './components/Soluciones';

function App() {
  return (
    <div className="">
      <Navbar/>
      <div className='container mt-5'>
        <Hero/>
        <Services/>
        <Solutions/>
        <Calc/>
      </div>
    </div>
  );
}

export default App;
