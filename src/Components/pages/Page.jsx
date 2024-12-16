import React from 'react'
import Navbar from './Navbar'
import {Showcase} from '../Showcase'

export const Page = (props) => {
  return (
    <div className='bg-cream'>
      <div className='flex justify-center'>
        <h1 className='justify-self-center, align-center text-dblue'>TM Racing</h1>
      </div>
      <div className='flex justify-center'>
        <Navbar/>
      </div>
      <Showcase location={props.loc} scale={props.scale} x={props.x} y={props.y} z={props.z}/>
    </div>
  )
}
