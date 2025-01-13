import React from 'react'
import ClientHeader from '../ClientHeader'
import { Outlet } from 'react-router-dom'
import ClientFooter from '../ClientFooter'

const MainClient = () => {
  return (
    <>
        <ClientHeader/>
        <Outlet/>
      
    </>
  )
}

export default MainClient