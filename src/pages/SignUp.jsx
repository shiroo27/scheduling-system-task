import React from 'react'
import { Navbar } from '../components/Navbar'
import { Outlet } from 'react-router-dom'

export const SignUp = () => {
  return (
    <div className='div2'>
      <Navbar />
      <Outlet />
      <h2>Sign Up</h2>
    </div>
  )
}