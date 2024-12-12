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
                <Route path="/Brake-system" element={<Page loc='Brake-system.stl'/>} />
                <Route path="/Powertrain" element={<Page loc='Powertrain.stl'/>} />
                <Route path="/Cooling" element={<Page loc='Cooling.stl'/>} />
                <Route path="/Electronics" element={<Page loc='Electronics.stl'/>} />
                <Route path="/Front-wing" element={<Page loc='Front-wing.stl'/>} />
                <Route path="/Rear-wing" element={<Page loc='Rear-wing.stl'/>} />
                <Route path="/Diffusor" element={<Page loc='Diffusor.stl'/>} />
            </Routes>
        </Router>
    );
}

export default App;
