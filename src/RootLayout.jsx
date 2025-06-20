import React from 'react'
import HomePage from './pages/HomePage'
import Navbar from './components/NavBar'
import { Outlet } from '@tanstack/react-router'

const RootLayout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default RootLayout