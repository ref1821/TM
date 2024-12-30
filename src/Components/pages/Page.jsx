import React from 'react'
import Navbar from './Navbar'
import {Showcase} from '../Showcase'

export const Page = (props) => {
  return (
    <div className='bg-gray-100 font-montserrat'>
      <div className='flex justify-center'>
        <h1 className='justify-self-center, align-center text-6xl font-horizon'>TMR24</h1>
      </div>
      <div className='flex justify-center'>
        <p className='text-sm'>by TM Racing</p>
      </div>
      <div className='flex justify-center'>
        <Navbar/>
      </div>
      <Showcase location={props.loc} scale={props.scale} x={props.x} y={props.y} z={props.z}/>
      <div className="fixed bottom-4 right-4 w-64 p-4 bg-white shadow-lg rounded-lg z-50">
        <img
          src="/qrinsta.png" // Ruta de la imagen en la carpeta `public`
          alt="Descripción"
          className="w-full h-auto rounded-md"
        />
        <p className="text-center">Siguenos en Instagram</p>
      </div>
      <div className="fixed bottom-4 left-4 w-64 p-4 bg-white shadow-lg rounded-lg z-50">
        <img
          src="/qr.png" // Ruta de la imagen en la carpeta `public`
          alt="Descripción"
          className="w-full h-auto rounded-md"
        />
        <p className="text-center">Ábrelo en tu celular</p>
      </div>
    </div>
  )
}
