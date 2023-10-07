import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export const AppBar = ({children}) => {
  return (
    <React.Fragment>
        <Navbar/>
            {children}
        <Footer/>
    </React.Fragment>
  )
}
