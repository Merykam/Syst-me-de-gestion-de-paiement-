import React, { useEffect, useState } from 'react'
import appartement from '../assets/appartement.jpg'
import Navbar from './common/Navbar'
import Sidebar from './common/SideBar'
import Appartement from './common/appartementTable'
import { useAppartement } from '../contexts/appartementContext'
import Paiment from './paiment'
import Statistics from './Statistics'
import { usePaiment } from '../contexts/paimentContext'
import AppartementPaiments from './AppartementPaiments'
import Client from './Client'

const Dashboard = () => {
  const {showPaiments,paiment}= usePaiment();
  useEffect(()=>{
      showPaiments();
   
  },[])

  const {appartement2, showAppartements,formData}= useAppartement();
  console.log(appartement2);
  useEffect(()=>{
    showAppartements();
    // console.log(appartement2);
  },[formData])

  const [page,setPage] = useState('statistics')

  const togglePage = (name) => {
    setPage(name)
  }
  return (
    <div className='relative w-full h-full'>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Loopple/loopple-public-assets@main/riva-dashboard-tailwind/riva-dashboard.css"/>

    <img className='absolute top-0 left-0 w-full h-full z-[-1]' src={appartement} alt="" />
    <Navbar/>
    <div className='flex w-full'>
      <div className=''>
      <Sidebar to={togglePage}/>
      </div>
      
        {page == "appartement" ? <div className='mx-auto  overflow-scroll'> <Appartement appartement2 = {appartement2} to={togglePage}/> </div>: ""}
       
        {page == "paiment" ? <div className='mx-auto overflow-scroll'>  <Paiment paiment={paiment}/> </div>: ""}
        {page == "statistics" ? <div> <Statistics/></div> : ""}
        {page == "paiments" ? <div className='mx-auto overflow-scroll'> <AppartementPaiments/> </div> : ""}
        {page == "client" ? <div className='w-4/5 mx-auto bg-white m-5 p-5 h-4/5  opacity-90 rounded-3xl'> <Client/> </div> : ""}
     
        </div>
   
    
    </div>
   

  
   
   
  )
}

export default Dashboard
