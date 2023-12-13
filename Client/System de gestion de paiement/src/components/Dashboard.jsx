import React from 'react'
import appartement from '../assets/appartement.jpg'
import Navbar from './common/Navbar'
import Sidebar from './common/SideBar'

const Dashboard = () => {
  return (
    <div className='relative w-full h-full'>
    <img className='absolute top-0 left-0 w-full h-full z-[-1]' src={appartement} alt="" />
    <Navbar/>
    <Sidebar/>
  
   
   
  </div>
  )
}

export default Dashboard
