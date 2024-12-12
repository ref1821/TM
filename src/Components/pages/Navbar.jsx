import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    const handleButtonClick = (component) => {
        const urlPath = component.replace(/\s+/g, '-').toLowerCase();
        window.location.href = `/${urlPath}`; // Cambia la URL y recarga la página
    };

    return (
        <nav className='bg-mblue'>
            <button className='m-5 p-3 border-2 border-dorange rounded-md bg-lblue' onClick={() => handleButtonClick('TMR24')}>Carro completo</button>
            <button className='m-5 p-3 border-2 border-dorange rounded-md bg-lblue' onClick={() => handleButtonClick('Chassis')}>Chasis</button>
            <button className='m-5 p-3 border-2 border-dorange rounded-md bg-lblue' onClick={() => handleButtonClick('Suspension')}>Suspensión</button>
            <button className='m-5 p-3 border-2 border-dorange rounded-md bg-lblue' onClick={() => handleButtonClick('Brake-system')}>Brake system</button>
            <button className='m-5 p-3 border-2 border-dorange rounded-md bg-lblue' onClick={() => handleButtonClick('Powertrain')}>Powertrain</button>
            <button className='m-5 p-3 border-2 border-dorange rounded-md bg-lblue' onClick={() => handleButtonClick('Cooling')}>Cooling</button>
            <button className='m-5 p-3 border-2 border-dorange rounded-md bg-lblue' onClick={() => handleButtonClick('Electronics')}>Electronics</button>
            <button className='m-5 p-3 border-2 border-dorange rounded-md bg-lblue' onClick={() => handleButtonClick('Front-wing')}>Alerón delantero</button>
            <button className='m-5 p-3 border-2 border-dorange rounded-md bg-lblue' onClick={() => handleButtonClick('Rear-wing')}>Alerón trasero</button>
            <button className='m-5 p-3 border-2 border-dorange rounded-md bg-lblue' onClick={() => handleButtonClick('Diffusor')}>Difusor</button>
        </nav>
    );
}

export default Navbar;