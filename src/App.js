import './App.css';
import Navbar from './components/Navbar';
import Calc from './components/CalculadoraIntegral';
import Hero from './components/Hero';

function App() {
  return (
    <div className="">
      <Navbar/>
      <div className='container mt-5'>
        <Hero/>
        <Calc/>
      </div>
    </div>
  );
}

export default App;
