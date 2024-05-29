import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import '../styles/sidebar.css'


const AuthPages = () => {
  return (
    <>

      <Sidebar/>
        <Outlet />
    </>
  )
}

export default AuthPages