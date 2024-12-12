import React from 'react'
import Navbar from './Navbar'
import { Showcase } from '../Showcase'

export const Page = (props) => {
  return (
    <div className='bg-mblue'>
      <div className='flex justify-center'>
        <h1 className='justify-self-center, align-center text-cream'>TM Racing</h1>
      </div>
      <div className='flex justify-center'>
        <Navbar/>
      </div>
      <Showcase location={props.loc}/>
    </div>
  )
}
