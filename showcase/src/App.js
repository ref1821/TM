import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Page } from './Components/pages/Page';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Page loc='TMR24.stl'/>} />
                <Route path="/TMR24" element={<Page loc='TMR24.stl'/>} />
                <Route path="/Chassis" element={<Page loc='Chassis.stl'/>} />
                <Route path="/Suspension" element={<Page loc='Suspe.stl'/>} />
                <Route path="/Brake-system" element={<div>Brake System</div>} />
                <Route path="/Powertrain" element={<div>Powertrain</div>} />
                <Route path="/Cooling" element={<div>Cooling</div>} />
                <Route path="/Electronics" element={<div>Electronics</div>} />
                <Route path="/Front-wing" element={<div>Alerón Delantero</div>} />
                <Route path="/Rear-wing" element={<div>Alerón Trasero</div>} />
                <Route path="/Diffusor" element={<div>Difusor</div>} />
            </Routes>
        </Router>
    );
}

export default App;
