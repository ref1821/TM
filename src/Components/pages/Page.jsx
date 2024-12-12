import React from 'react'
import Navbar from './Navbar'
import { Showcase } from '../Showcase'

export const Page = (props) => {
  return (
    <div>
        <Navbar/>
        <Showcase location={props.loc}/>
    </div>
  )
}
