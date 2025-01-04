import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Page } from './Components/pages/Page';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Page loc='TMR24.stl' scale='0.00005' x='0' y='0' z='0'/>} />
                <Route path="/TMR24" element={<Page loc='TMR24.stl' scale='0.00005' x='0' y='0' z='0'/>} />
                <Route path="/Chassis" element={<Page loc='Chassis.stl' scale='0.00007' x='0' y='0' z='0'/>} />
                <Route path="/Suspension" element={<Page loc='Suspe.stl' scale='0.001' x='0' y='0' z='0' />} />
                <Route path="/Brake-system" element={<Page loc='Brake-system.stl' scale='0.0008' x='0' y='0' z='-0.03'/>} />
                <Route path="/Powertrain" element={<Page loc='Powertrain.stl' scale='0.0002' x='0' y='0' z='0'/>} />
                <Route path="/Cooling" element={<Page loc='Cooling.stl' scale='0.00018' x='-0.06' y='0' z='0'/>} />
                <Route path="/Electronics" element={<Page loc='Electronics.stl' scale='0.0003' x='0' y='-0.03' z='0'/>} />
                <Route path="/Front-wing" element={<Page loc='Front-wing.stl' scale='0.0001' x='0.1' y='0' z='0'/>} />
                <Route path="/Rear-wing" element={<Page loc='Rear-wing.stl' scale='0.0001' x='0' y='-0.1' z='0'/>} />
                <Route path="/Diffusor" element={<Page loc='Diffusor.stl' scale='0.0001' x='0' y='0' z='0'/>} />
            </Routes>
        </Router>
    );
}

export default App;
