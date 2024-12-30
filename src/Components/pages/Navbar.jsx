import React from 'react';
import { IoCarSportOutline } from "react-icons/io5";
import { LuBox } from "react-icons/lu";
import { GiSpring, GiCarWheel } from "react-icons/gi";
import { PiEngine, PiThermometerCold } from "react-icons/pi";
import { SlEnergy } from "react-icons/sl";
import AirIcon from '@mui/icons-material/Air';


function Navbar() {
    const handleButtonClick = (component) => {
        const urlPath = component.replace(/\s+/g, '-').toLowerCase();
        window.location.href = `/${urlPath}`;
    };

    return (
        <nav className="bg-gray-100 font-montserrat text-md">
            <button
                className="m-5 p-3 bg-gray-100 border-b-2 border-gray-300 rounded-md hover:border-gray-300 hover:bg-gray-300"
                onClick={() => handleButtonClick("TMR24")}
            >
                <div className="flex justify-center">
                    <IoCarSportOutline />
                </div>
                <p>TMR24</p>
            </button>

            <button
                className="m-5 p-3 bg-gray-100 border-b-2 border-gray-300 rounded-md hover:border-gray-300 hover:bg-gray-300"
                onClick={() => handleButtonClick("Chassis")}
            >
                <div className="flex justify-center">
                    <LuBox />
                </div>
                <p>Chassis</p>
            </button>
            <button
                className="m-5 p-3 bg-gray-100 border-b-2 border-gray-300 rounded-md hover:border-gray-300 hover:bg-gray-300"
                onClick={() => handleButtonClick("Suspension")}
            >
                <div className="flex justify-center">
                    <GiSpring />
                </div>
                <p>Suspension</p>
            </button>
            <button
                className="m-5 p-3 bg-gray-100 border-b-2 border-gray-300 rounded-md hover:border-gray-300 hover:bg-gray-300"
                onClick={() => handleButtonClick("Brake-system")}
            >
                <div className="flex justify-center">
                    <GiCarWheel />
                </div>
                <p>Brake system</p>
            </button>
            <button
                className="m-5 p-3 bg-gray-100 border-b-2 border-gray-300 rounded-md hover:border-gray-300 hover:bg-gray-300"
                onClick={() => handleButtonClick("Powertrain")}
            >
                <div className="flex justify-center">
                    <PiEngine />
                </div>
                <p>Powertrain</p>
            </button>
            <button
                className="m-5 p-3 bg-gray-100 border-b-2 border-gray-300 rounded-md hover:border-gray-300 hover:bg-gray-300"
                onClick={() => handleButtonClick("Cooling")}
            >
                <div className="flex justify-center">
                    <PiThermometerCold />
                </div>
                <p>Cooling</p>
            </button>
            <button
                className="m-5 p-3 bg-gray-100 border-b-2 border-gray-300 rounded-md hover:border-gray-300 hover:bg-gray-300"
                onClick={() => handleButtonClick("Electronics")}
            >
                <div className="flex justify-center">
                    <SlEnergy /> 
                </div>
                <p>Electronics</p>
            </button>
            <button
                className="m-5 p-3 bg-gray-100 border-b-2 border-gray-300 rounded-md hover:border-gray-300 hover:bg-gray-300"
                onClick={() => handleButtonClick("Front-wing")}
            >
                <div className="flex justify-center">
                    <AirIcon />
                </div>
                <p>Front wing</p>
            </button>
            <button
                className="m-5 p-3 bg-gray-100 border-b-2 border-gray-300 rounded-md hover:border-gray-300 hover:bg-gray-300"
                onClick={() => handleButtonClick("Rear-wing")}
            >
                <div className="flex justify-center">
                    <AirIcon />
                </div>
                <p>Rear wing</p>
            </button>
            <button
                className="m-5 p-3 bg-gray-100 border-b-2 border-gray-300 rounded-md hover:border-gray-300 hover:bg-gray-300"
                onClick={() => handleButtonClick("Diffusor")}
            >
                <div className="flex justify-center">
                    <AirIcon />
                </div>
                <p>Diffuser</p>
            </button>
</nav>

    );
}

export default Navbar;