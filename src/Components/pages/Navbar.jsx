import React, { useState } from 'react';
import { IoCarSportOutline } from "react-icons/io5";
import { LuBox } from "react-icons/lu";
import { GiSpring, GiCarWheel } from "react-icons/gi";
import { PiEngine, PiThermometerCold } from "react-icons/pi";
import { SlEnergy } from "react-icons/sl";
import AirIcon from '@mui/icons-material/Air';
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleButtonClick = (component) => {
        const urlPath = component.replace(/\s+/g, '-').toLowerCase();
        window.location.href = `/${urlPath}`;
    };

    return (
        <div>
            {/* Menu button for mobile */}
            <button
                className={`sm:hidden fixed bg-gray-200 p-3 rounded-full shadow-lg z-50 transform ${isMenuOpen ? "top-2 left-2" : "top-35 left-4"}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <AiOutlineMenu />
            </button>

            {/* Sidebar menu */}
            <div
                className={`fixed top-0 left-0 h-full bg-gray-100 shadow-lg transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 z-40 sm:hidden`}
            >
                <nav className="font-montserrat text-md p-4">
                    <button
                        className="block m-3 p-3 bg-gray-100 border-b-2 border-gray-300 rounded-md hover:border-gray-300 hover:bg-gray-300"
                        onClick={() => handleButtonClick("TMR24")}
                    >
                        <div className="flex justify-center">
                            <IoCarSportOutline />
                            <p className='ml-2'>TMR24</p>
                        </div>
                    </button>

                    <button
                        className="block m-3 p-3 bg-gray-100 border-b-2 border-gray-300 rounded-md hover:border-gray-300 hover:bg-gray-300"
                        onClick={() => handleButtonClick("Chassis")}
                    >
                        <div className="flex justify-center">
                            <LuBox />
                            <p className='ml-2'>Chassis</p>
                        </div>
                    </button>
                    <button
                        className="block m-3 p-3 bg-gray-100 border-b-2 border-gray-300 rounded-md hover:border-gray-300 hover:bg-gray-300"
                        onClick={() => handleButtonClick("Suspension")}
                    >
                        <div className="flex justify-center">
                            <GiSpring />
                            <p className='ml-2'>Suspension</p>
                        </div>
                    </button>
                    <button
                        className="block m-3 p-3 bg-gray-100 border-b-2 border-gray-300 rounded-md hover:border-gray-300 hover:bg-gray-300"
                        onClick={() => handleButtonClick("Brake-system")}
                    >
                        <div className="flex justify-center">
                            <GiCarWheel />
                            <p className='ml-2'>Brake system</p>
                        </div>
                    </button>
                    <button
                        className="block m-3 p-3 bg-gray-100 border-b-2 border-gray-300 rounded-md hover:border-gray-300 hover:bg-gray-300"
                        onClick={() => handleButtonClick("Powertrain")}
                    >
                        <div className="flex justify-center">
                            <PiEngine />
                            <p className='ml-2'>Powertrain</p>
                        </div>
                    </button>
                    <button
                        className="block m-3 p-3 bg-gray-100 border-b-2 border-gray-300 rounded-md hover:border-gray-300 hover:bg-gray-300"
                        onClick={() => handleButtonClick("Cooling")}
                    >
                        <div className="flex justify-center">
                            <PiThermometerCold />
                            <p className='ml-2'>Cooling</p>
                        </div>
                    </button>
                    <button
                        className="block m-3 p-3 bg-gray-100 border-b-2 border-gray-300 rounded-md hover:border-gray-300 hover:bg-gray-300"
                        onClick={() => handleButtonClick("Electronics")}
                    >
                        <div className="flex justify-center">
                            <SlEnergy /> 
                            <p className='ml-2'>Electronics</p>
                        </div>
                    </button>
                    <button
                        className="block m-3 p-3 bg-gray-100 border-b-2 border-gray-300 rounded-md hover:border-gray-300 hover:bg-gray-300"
                        onClick={() => handleButtonClick("Front-wing")}
                    >
                        <div className="flex justify-center">
                            <AirIcon />
                            <p className='ml-2'>Front wing</p>
                        </div>
                    </button>
                    <button
                        className="block m-3 p-3 bg-gray-100 border-b-2 border-gray-300 rounded-md hover:border-gray-300 hover:bg-gray-300"
                        onClick={() => handleButtonClick("Rear-wing")}
                    >
                        <div className="flex justify-center">
                            <AirIcon />
                            <p className='ml-2'>Rear wing</p>
                        </div>
                    </button>
                    <button
                        className="block m-3 p-3 bg-gray-100 border-b-2 border-gray-300 rounded-md hover:border-gray-300 hover:bg-gray-300"
                        onClick={() => handleButtonClick("Diffusor")}
                    >
                        <div className="flex justify-center">
                            <AirIcon />
                            <p className='ml-2'>Diffuser</p>
                        </div>
                    </button>
                </nav>
            </div>

            {/* Full navbar for larger screens */}
            <nav className="bg-gray-100 font-montserrat text-md justify-center items-center">
                <div className='hidden sm:flex justify-center items-center'>
                <button
                    className="m-2 p-2 bg-gray-100 border-b-2 border-gray-300 rounded-md hover:border-gray-300 hover:bg-gray-300"
                    onClick={() => handleButtonClick("TMR24")}
                >
                    <div className="flex justify-center">
                        <IoCarSportOutline />
                    </div>
                    <p>TMR24</p>
                </button>

                <button
                    className="m-2 p-2 bg-gray-100 border-b-2 border-gray-300 rounded-md hover:border-gray-300 hover:bg-gray-300"
                    onClick={() => handleButtonClick("Chassis")}
                >
                    <div className="flex justify-center">
                        <LuBox />
                    </div>
                    <p>Chassis</p>
                </button>
                <button
                    className="m-2 p-2 bg-gray-100 border-b-2 border-gray-300 rounded-md hover:border-gray-300 hover:bg-gray-300"
                    onClick={() => handleButtonClick("Wheel-system")}
                >
                    <div className="flex justify-center">
                        <GiCarWheel />
                    </div>
                    <p>Wheel system</p>
                </button>
                <button
                    className="m-2 p-2 bg-gray-100 border-b-2 border-gray-300 rounded-md hover:border-gray-300 hover:bg-gray-300"
                    onClick={() => handleButtonClick("Powertrain")}
                >
                    <div className="flex justify-center">
                        <PiEngine />
                    </div>
                    <p>Powertrain</p>
                </button>
                <button
                    className="m-2 p-2 bg-gray-100 border-b-2 border-gray-300 rounded-md hover:border-gray-300 hover:bg-gray-300"
                    onClick={() => handleButtonClick("Cooling")}
                >
                    <div className="flex justify-center">
                        <PiThermometerCold />
                    </div>
                    <p>Cooling</p>
                </button>
                </div>
                <div className='hidden sm:flex justify-center items-center'>
                <button
                    className="m-2 p-2 bg-gray-100 border-b-2 border-gray-300 rounded-md hover:border-gray-300 hover:bg-gray-300"
                    onClick={() => handleButtonClick("Electronics")}
                >
                    <div className="flex justify-center">
                        <SlEnergy /> 
                    </div>
                    <p>Electronics</p>
                </button>
                <button
                    className="m-2 p-2 bg-gray-100 border-b-2 border-gray-300 rounded-md hover:border-gray-300 hover:bg-gray-300"
                    onClick={() => handleButtonClick("Front-wing")}
                >
                    <div className="flex justify-center">
                        <AirIcon />
                    </div>
                    <p>Front wing</p>
                </button>
                <button
                    className="m-2 p-2 bg-gray-100 border-b-2 border-gray-300 rounded-md hover:border-gray-300 hover:bg-gray-300"
                    onClick={() => handleButtonClick("Rear-wing")}
                >
                    <div className="flex justify-center">
                        <AirIcon />
                    </div>
                    <p>Rear wing</p>
                </button>
                <button
                    className="m-2 p-2 bg-gray-100 border-b-2 border-gray-300 rounded-md hover:border-gray-300 hover:bg-gray-300"
                    onClick={() => handleButtonClick("Diffusor")}
                >
                    <div className="flex justify-center">
                        <AirIcon />
                    </div>
                    <p>Diffuser</p>
                </button>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
