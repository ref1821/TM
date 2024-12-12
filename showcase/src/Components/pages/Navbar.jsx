import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    const handleButtonClick = (component) => {
        const urlPath = component.replace(/\s+/g, '-').toLowerCase();
        window.location.href = `/${urlPath}`; // Cambia la URL y recarga la página
    };

    return (
        <nav className="navbar">
            <button onClick={() => handleButtonClick('TMR24')}>Carro completo</button>
            <button onClick={() => handleButtonClick('Chassis')}>Chasis</button>
            <button onClick={() => handleButtonClick('Suspension')}>Suspensión</button>
            <button onClick={() => handleButtonClick('Brake-system')}>Brake system</button>
            <button onClick={() => handleButtonClick('Powertrain')}>Powertrain</button>
            <button onClick={() => handleButtonClick('Cooling')}>Cooling</button>
            <button onClick={() => handleButtonClick('Electronics')}>Electronics</button>
            <button onClick={() => handleButtonClick('Front-wing')}>Alerón delantero</button>
            <button onClick={() => handleButtonClick('Rear-wing')}>Alerón trasero</button>
            <button onClick={() => handleButtonClick('Diffusor')}>Difusor</button>
        </nav>
    );
}

export default Navbar;