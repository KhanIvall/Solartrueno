import './App.css';
import Navbar from './components/Navbar';
import Calc from './components/CalculadoraIntegral'

function App() {
  return (
    <div className="">
      <Navbar/>
      <div className='container'>
        <Calc/>
        <Calc/>
        <Calc/>
        <Calc/>
        <Calc/>
        <Calc/>
        <Calc/>
        <Calc/>
      </div>
    </div>
  );
}

export default App;
