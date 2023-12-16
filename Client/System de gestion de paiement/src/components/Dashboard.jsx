import React, { useEffect } from 'react'
import appartement from '../assets/appartement.jpg'
import Navbar from './common/Navbar'
import Sidebar from './common/SideBar'
import Appartement from './common/appartementTable'
import { useAppartement } from '../contexts/appartementContext'

const Dashboard = () => {
  const {appartement2, showAppartements}= useAppartement();
  useEffect(()=>{
    showAppartements();
    // console.log(appartement2);
  },[])
  return (
    <div className='relative w-full h-full'>
    <img className='absolute top-0 left-0 w-full h-full z-[-1]' src={appartement} alt="" />
    <Navbar/>
    <div className='flex'>
    <Sidebar/>
<Appartement appartement2 = {appartement2}/>
    </div>
   

  
   
   
  </div>
  )
}

export default Dashboard
