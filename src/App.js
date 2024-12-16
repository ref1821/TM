import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Page } from './Components/pages/Page';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Page loc='TMR24.stl' scale='0.5'/>} />
                <Route path="/TMR24" element={<Page loc='TMR24.stl' scale='0.5'/>} />
                <Route path="/Chassis" element={<Page loc='Chassis.stl' scale='0.4' x='-750' y='0' z='-150'/>} />
                <Route path="/Suspension" element={<Page loc='Suspe.stl' scale='2' x='-750' y='0' z='-150' />} />
                <Route path="/Brake-system" element={<Page loc='Brake-system.stl' scale='0.5'/>} />
                <Route path="/Powertrain" element={<Page loc='Powertrain.stl' scale='0.05'/>} />
                <Route path="/Cooling" element={<Page loc='Cooling.stl' scale='0.1'/>} />
                <Route path="/Electronics" element={<Page loc='Electronics.stl' scale='0.2'/>} />
                <Route path="/Front-wing" element={<Page loc='Front-wing.stl' scale='0.05'/>} />
                <Route path="/Rear-wing" element={<Page loc='Rear-wing.stl' scale='0.05'/>} />
                <Route path="/Diffusor" element={<Page loc='Diffusor.stl' scale='0.02'/>} />
            </Routes>
        </Router>
    );
}

export default App;
