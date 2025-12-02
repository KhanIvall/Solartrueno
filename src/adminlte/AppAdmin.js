import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardHome from './pages/dashboard';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/dashboard' element={<DashboardHome/>}></Route>
            </Routes>
        </Router>
    );
}

export default App;