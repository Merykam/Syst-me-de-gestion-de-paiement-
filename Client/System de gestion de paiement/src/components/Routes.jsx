
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import App from '../App'
import LandingPage from './LandingPage';




const MainRoutes = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      
      </Routes>
   
    </div>
  )
}

export default MainRoutes


