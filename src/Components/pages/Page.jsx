import React from 'react'
import Navbar from './Navbar'
import {Showcase} from '../Showcase'
import { Link } from '@mui/material'

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
      <a href="https://www.instagram.com/tmracingteam?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
  <div className="fixed bottom-0 w-full sm:bottom-4 sm:right-4 sm:w-48 p-4 bg-white shadow-lg rounded-none sm:rounded-lg z-50 text-center">
    {/* Imagen, visible solo en pantallas más grandes */}
    <img
      src="/qrinsta.png"
      alt="QR Instagram"
      className="w-full h-auto rounded-md hidden sm:block"
    />
    {/* Texto, siempre visible */}
    <p className="text-center sm:hidden">Síguenos en Instagram</p>
    <p className="text-center hidden sm:block">Síguenos en Instagram</p>
  </div>
</a>

      <div className="fixed bottom-4 left-4 w-48 p-4 bg-white shadow-lg rounded-lg z-50 hidden sm:block">
        <img
          src="/qr.png"
          alt="Descripción"
          className="w-full h-auto rounded-md"
        />
        <p className="text-center">Ábrelo en tu celular</p>
      </div>
    </div>
  )
}
