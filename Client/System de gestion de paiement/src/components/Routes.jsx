
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import LandingPage from './LandingPage';




const CheckToken = ({ children }) => {
  // const navigate = useNavigate()
  const token = localStorage.getItem("token");
  const isAuthenticated = !!token;

  if (!isAuthenticated) {
    return <Navigate to="/" />
  }
  
  return children;

  
}
const MainRoutes = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/dashboard" element={<CheckToken><Dashboard/></CheckToken>}/>
      
      </Routes>
   
    </div>
  )
}

export default MainRoutes


