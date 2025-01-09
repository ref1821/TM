import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Page } from './Components/pages/Page';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Page loc='TMR24_3.stl' scale='0.00005' x='0' y='0' z='0'/>} />
                <Route path="/TMR24" element={<Page loc='TMR24.stl' scale='0.00005' x='0' y='0' z='0'/>} />
                <Route path="/Chassis" element={<Page loc='Chassis.stl' scale='0.00006' x='0' y='0.02' z='0'/>} />
                <Route path="/Wheel-system" element={<Page loc='Wheel-system2.stl' scale='0.0002' x='-0.01' y='0.07' z='-0.01' />} />
                <Route path="/Powertrain" element={<Page loc='Powertrain.stl' scale='0.0002' x='0' y='0' z='0'/>} />
                <Route path="/Cooling" element={<Page loc='Cooling.stl' scale='0.00018' x='-0.06' y='0' z='0'/>} />
                <Route path="/Electronics" element={<Page loc='Electronics.stl' scale='0.0003' x='0' y='-0.03' z='0'/>} />
                <Route path="/Front-wing" element={<Page loc='Front-wing.stl' scale='0.000065' x='0' y='0' z='0'/>} />
                <Route path="/Rear-wing" element={<Page loc='Rear-wing2.stl' scale='0.0001' x='-0.05' y='0' z='0'/>} />
                <Route path="/Diffusor" element={<Page loc='Diffusor.stl' scale='0.0001' x='0' y='0' z='0'/>} />
            </Routes>
        </Router>
    );
}

export default App;
